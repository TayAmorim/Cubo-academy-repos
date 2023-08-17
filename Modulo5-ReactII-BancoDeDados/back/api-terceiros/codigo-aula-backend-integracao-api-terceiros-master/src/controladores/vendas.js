const pool = require('../conexao')
const { criarToken, cobrar } = require('../stripe')

const venda = async (req, res) => {
	const { cliente_id, produto_id, quantidade, card } = req.body

	try {
		const cliente = await pool.query('select * from clientes where id = $1', [
			cliente_id,
		])

		if (cliente.rowCount < 1) {
			return res.status(404).json({ mensagem: 'Cliente não existe' })
		}

		const produto = await pool.query('select * from produtos where id = $1', [
			produto_id,
		])

		if (produto.rowCount < 1) {
			return res.status(404).json({ mensagem: 'Produto não existe' })
		}

		if (quantidade < 1) {
			return res.status(400).json({ mensagem: 'A quantidade é de no minimo 1' })
		}

		const valorVenda = produto.rows[0].valor * quantidade

		const tokenCartao = await criarToken({ card })
		const cobranca = await cobrar(valorVenda, tokenCartao.id)

		const query = `
            insert into vendas (cliente_id, produto_id, quantidade, transacao_id) 
            values ($1, $2, $3, $4) returning *
        `
		const vendaRealizada = await pool.query(query, [
			cliente_id,
			produto_id,
			quantidade,
			cobranca.id,
		])

		return res.status(201).json(cobranca)
	} catch (error) {
		if (error.response) {
			return res
				.status(400)
				.json({ mensagem: error.response.data.error.message })
		}
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = {
	venda,
}
