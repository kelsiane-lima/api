const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const ProdutoController = require('./controllers/ProdutoController');
const ProfileController = require('./controllers/ProfileController');
const SessaoController = require('./controllers/SessaoController');
const FornecedorController = require('./controllers/FornecedorController');
const CategoriaController = require('./controllers/CategoriaController');
const FabricanteController = require('./controllers/FabricanteController');
const routes = express.Router();

//Rotas de Fornecedor

routes.get('/fornecedor', FornecedorController.index);
routes.delete('/fornecedor/:fornecedor_id', FornecedorController.delete);
routes.post('/fornecedor', FornecedorController.create);
routes.put('/fornecedor/:fornecedor_id', FornecedorController.edit);

//Rotas de User

routes.get('/user', UsuarioController.index);
routes.post('/user', UsuarioController.create);
routes.delete('/user/:usuario_id', UsuarioController.delete);
routes.put('/user/:usuario_id', UsuarioController.edit);

//Rotas de Categorias

routes.get('/category', CategoriaController.index);
routes.post('/category', CategoriaController.create);
routes.delete('/category/:categoria_id', CategoriaController.delete);
routes.put('/category/:categoria_id', CategoriaController.edit);

//Rota de autenticaçao simples

routes.post('/session', SessaoController.create);

// Rotas de Produtos

routes.get('/product', ProdutoController.index);
routes.post('/product', ProdutoController.create);
routes.delete('/product/:produto_id', ProdutoController.delete);
routes.put('/product/:produto_id/:qtd/:op', ProdutoController.edit);

// Rotas para criar a página de profile

routes.get('/profile/:name',  ProfileController.index);
routes.get('/profile',  ProfileController.relatorio);

// Rotas de Fabricante
routes.get('/fabricante', FabricanteController.index);
routes.delete('/fabricante/:fabricante_id', FabricanteController.delete);
routes.post('/fabricante', FabricanteController.create);
routes.put('/fabricante/:fabricante_id', FabricanteController.edit);

module.exports = routes;