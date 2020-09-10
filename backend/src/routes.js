const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const FornecedorController = require('./controllers/FornecedorController');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();

//Rotas de Fornecedor

routes.get('/fornecedor', FornecedorController.index);
routes.delete('/fornecedor/:fornecedor_id', FornecedorController.delete);
routes.post('/fornecedor', FornecedorController.create);
routes.put('/fornecedor/:fornecedor_id', FornecedorController.edit);

//Rotas de User

routes.get('/user', UserController.index);
routes.post('/user', UserController.create);
routes.delete('/user/:usuario_id', UserController.delete);
routes.put('/user/:usuario_id', UserController.edit);

//Rotas de Categorias

routes.get('/category', CategoryController.index);
routes.post('/category', CategoryController.create);
routes.delete('/category/:categoria_id', CategoryController.delete);
routes.put('/category/:categoria_id', CategoryController.edit);

//Rota de autenticaçao simples

routes.post('/session', SessionController.create);

// Rotas de Produtos

routes.get('/product', ProductController.index);
routes.post('/product', ProductController.create);
routes.delete('/product/:produto_id', ProductController.delete);
routes.put('/product/:produto_id/:qtd/:op', ProductController.edit);

// Rotas para criar a página de profile

routes.get('/profile/:name',  ProfileController.index);
routes.get('/profile',  ProfileController.relatorio);

module.exports = routes;