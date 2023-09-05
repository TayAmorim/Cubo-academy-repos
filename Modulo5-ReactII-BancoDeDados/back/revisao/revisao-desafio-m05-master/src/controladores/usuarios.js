const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const {nome, email, senha} = req.body;

    try {
        const usuarioEncontrado = await knex('usuarios').where({email}).first();

        if(usuarioEncontrado){
            return res.status(400).json({mensagem: 'O email já existe'});
        };

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios')
            .insert({
                nome,
                email,
                senha: senhaCriptografada
            }).returning('*');

        const {senha: _, ...usuarioCadastrado} = usuario[0];

        return res.status(201).json(usuarioCadastrado);
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do Servidor'});
    }
};

const obterPerfil = async (req, res) => {
    return res.status(200).json(req.usuario);
};

const atualizarPerfil = async (req, res) => {
    const {nome, email, senha} = req.body;
    const {id}  =req.usuario;

    try {
        const usuarioExiste = await knex('usuarios').where({id}).first();

        if(!usuarioExiste){
            return res.status(404).json({mensagem: 'O usuário não foi encontrado'});
        };

        if (senha){
            senhaCriptografada = await bcrypt.hash(senha, 10);
        };

        if (email !== req.usuario.email) {
            const emailUsuarioExiste = await knex('usuarios').where({email}).first();

            if(emailUsuarioExiste){
                return res.status(400).json({mensagem: 'O email já existe'});
            }
        };

        const usuarioAtualizado = await knex('usuarios').where({id})
            .update({
                nome,
                email,
                senha: senhaCriptografada
            });

            return res.status(200).json({mensagem: 'Usuario atualizado com sucesso'});
    } catch (error) {
        return res.status(500).json({mensagem: 'Erro interno do Servidor'}); 
    }
};

module.exports = {
    cadastrarUsuario, 
    obterPerfil,
    atualizarPerfil
};