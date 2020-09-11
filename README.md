# Sistema de controle de estoque
#### Um sistema de controle de estoque simples.


## Instalação
É necessário ter instalado na sua máquina o [Node.js](https://nodejs.org/en/)
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
#### É necessário ter o PostgresSQL na sua máquina ou Sqlite, se preferir usar o Sqlite modifique o arquivo de configuração [knexfile.js](https://github.com/kelsiane-lima/api/blob/master/knexfile.js)
## Ferramentas e Tecnologias utilizadas:

* PostgresSQL
* Express.js
* Node.js
* Knex.js

## Informações de como executar as migrations [clique_aqui](https://github.com/kelsiane-lima/api/blob/master/src/database/README.md)

