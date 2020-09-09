const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const FornecedorController = require('./controllers/FornecedorController');
const CategoryController = require('./controllers/CategoryController');

const routes = express.Router();
routes.get('/fornecedor', FornecedorController.index);

routes.get('/user', UserController.index);
routes.get('/', UserController.index);
routes.post('/user', UserController.create);

routes.get('/category', CategoryController.index);
routes.post('/category', CategoryController.create);

routes.post('/session', SessionController.create);

routes.get('/product', ProductController.index);
routes.get('/product/:produto_id', ProductController.index2);
routes.post('/product', ProductController.create);
routes.delete('/product/:produto_id', ProductController.delete);
routes.put('/product/:produto_id/:qtd/:op', ProductController.edit);

routes.get('/profile/:name',  ProfileController.index);
routes.get('/profile',  ProfileController.relatorio);

module.exports = routes;