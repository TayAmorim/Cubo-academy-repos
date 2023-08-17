const pool = require('../conexao')

const listar = async (req, res) => {
	try {
		const clientes = await pool.query('select * from clientes')
		return res.json(clientes.rows)
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

const cadastrar = async (req, res) => {
	const { nome, email, telefone } = req.body

	try {
		const queryClienteEmail = 'select * from clientes where email = $1'
		const emailExistente = await pool.query(queryClienteEmail, [email])

		if (emailExistente.rowCount > 0) {
			return res
				.status(400)
				.json({ mensagem: 'E-mail informado já está cadastrado' })
		}

		const query = `
            insert into clientes (nome, email, telefone) 
            values ($1, $2, $3) returning *
        `
		const params = [nome, email, telefone]
		const cliente = await pool.query(query, params)

		return res.status(201).json(cliente.rows[0])
	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = {
	cadastrar,
	listar,
}
