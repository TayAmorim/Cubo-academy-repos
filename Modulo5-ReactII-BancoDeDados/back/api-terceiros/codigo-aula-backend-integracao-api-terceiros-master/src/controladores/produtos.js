const pool = require('../conexao')

const listar = async (req, res) => {
	try {
		const produtos = await pool.query('select * from produtos')
		return res.json(produtos.rows)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

const cadastrar = async (req, res) => {
	const { nome, descricao, valor } = req.body

	try {
		const query = `
            insert into produtos (nome, descricao, valor) 
            values ($1, $2, $3) returning *
        `
		const params = [nome, descricao, valor]
		const produto = await pool.query(query, params)

		return res.status(201).json(produto.rows[0])
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = {
	cadastrar,
	listar,
}
