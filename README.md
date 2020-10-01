# Sistema de controle de estoque

#### Um sistema de controle de estoque simples, para o acompanhamento do fluxo de entrada e saída de produtos.

## Caso queira só fazer os testes no Postman, foi feito o deploy da API no Heroku [LINK API](https://api-devweb.herokuapp.com/)

##### Não é necessário token

* Criar usuário (POST)
```sh
 https://api-devweb.herokuapp.com/user/
```
```json
{ 
		"nome": "Silas",
        "email": "silas@gmail.com",
        "senha": "1234"
	
}
```
* Vai em sessão pra pegar o token e ter acesso as outras rotas (POST)
```sh
 https://api-devweb.herokuapp.com/session/
```
```json
{ 
		"nome": "Silas",
        "senha": "1234"
	
}
```

* Coloque o token no Headers da requisição com a chave __x-access-token__ como mostra na figura, isso serve para acessar todas as outras rotas que se encontram no arquivo [routes](https://github.com/kelsiane-lima/api/blob/master/src/routes.js)

![alt text](https://github.com/kelsiane-lima/api/tree/master/img/example.PNG)


# Instalação Manual

* É necessário ter instalado na sua máquina o [Node.js](https://nodejs.org/en/)

* O Banco de dados [postgreSQL](https://www.postgresql.org/download/) ou Sqlite, faça alterações no arquivo [knexfile.js](https://github.com/kelsiane-lima/api/blob/master/knexfile.js)

Em seguida:

#### Clona o repositório:
```sh
git clone https://github.com/kelsiane-lima/api.git
```
Linux ou Windows:

```sh
npm install ou npm i
```


#### Instalar o nodemon que é utilizado para auto reload no browser.
```sh
    npm install -g nodemon
    ou
    npm install nodemon --save-dev
```

- Para executar use:

```sh
    nodemon src/index.js
    ou
    npm start
```
#### Migrations
Rode as migrações do projeto, para mais informações de como rodar clique [AQUI](https://github.com/kelsiane-lima/api/blob/master/src/database/README.md)


# Ferramentas e Tecnologias utilizadas:

* PostgresSQL
* Express.js
* Node.js
* Knex.js

