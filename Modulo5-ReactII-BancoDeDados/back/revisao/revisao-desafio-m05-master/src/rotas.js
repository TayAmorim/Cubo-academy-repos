const express = require('express');
const {cadastrarUsuario, obterPerfil, atualizarPerfil} = require('./controladores/usuarios');
const login = require('./controladores/login');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const usuarioSchema = require('./validacoes/usuarioSchema');
const loginSchema = require('./validacoes/loginSchema');

const rotas = express();

rotas.post('/cadastro', validarRequisicao(usuarioSchema), cadastrarUsuario);
rotas.post('/login', validarRequisicao(loginSchemaSchema), login)

rotas.use(filtroLogin);

rotas.get('/perfil', obterPerfil);
rotas.put('/perfil', validarRequisicao(usuarioSchema), atualizarPerfil);