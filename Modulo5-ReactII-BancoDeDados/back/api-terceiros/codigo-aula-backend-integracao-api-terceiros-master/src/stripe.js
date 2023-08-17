const instanciaAxios = require('./api')
const qs = require('qs')

const criarToken = async card => {
	const dadosCartao = qs.stringify(card)
	const { data: tokenCartao } = await instanciaAxios.post(
		'/tokens',
		dadosCartao
	)
	return tokenCartao
}

const cobrar = async (amount, tokenCartao) => {
	const dadosCobranca = qs.stringify({
		amount,
		currency: 'brl',
		source: tokenCartao,
	})

	const { data: cobranca } = await instanciaAxios.post(
		'/charges',
		dadosCobranca
	)

	return cobranca
}

module.exports = {
	criarToken,
	cobrar,
}
