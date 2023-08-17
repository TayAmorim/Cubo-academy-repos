const pool = require('../conexao')

const listarCarros = async (req, res) => {
	try {
		const { rows } = await pool.query('select * from carros')

		return res.json(rows)
	} catch (error) {
		return res.status(500).json('Erro interno do servidor')
	}
}

const detalharCarro = async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select * from carros where id = $1',
			[id]
		)

		if (rowCount < 1) {
			return res.status(404).json({ mensagem: 'Carro não encontrado' })
		}

		return res.json(rows[0])
	} catch (error) {
		return res.status(500).json('Erro interno do servidor')
	}
}

const cadastrarCarro = async (req, res) => {
	const { modelo, marca, ano, cor, descricao } = req.body

	try {
		const { rows } = await pool.query(
			'insert into carros (modelo, marca, ano, cor, descricao) values ($1, $2, $3, $4, $5) returning *',
			[modelo, marca, ano, cor, descricao]
		)

		return res.status(201).json(rows[0])
	} catch (error) {
		return res.status(500).json('Erro interno do servidor')
	}
}

const atualizarCarro = async (req, res) => {
	const { id } = req.params
	const { modelo, marca, ano, cor, descricao } = req.body

	try {
		const { rows, rowCount } = await pool.query(
			'select * from carros where id = $1',
			[id]
		)

		if (rowCount < 1) {
			return res.status(404).json({ mensagem: 'Carro não encontrado' })
		}

		await pool.query(
			'update carros set modelo = $1, marca = $2, ano = $3, cor = $4, descricao = $5 where id = $6',
			[modelo, marca, ano, cor, descricao, id]
		)

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json('Erro interno do servidor')
	}
}

const excluirCarro = async (req, res) => {
	const { id } = req.params

	try {
		const { rows, rowCount } = await pool.query(
			'select * from carros where id = $1',
			[id]
		)

		if (rowCount < 1) {
			return res.status(404).json({ mensagem: 'Carro não encontrado' })
		}

		await pool.query('delete from carros where id = $1', [id])

		return res.status(204).send()
	} catch (error) {
		return res.status(500).json('Erro interno do servidor')
	}
}

module.exports = {
	listarCarros,
	detalharCarro,
	cadastrarCarro,
	atualizarCarro,
	excluirCarro,
}
