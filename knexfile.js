
module.exports = {
  
  staging: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    },
  
  },

  development: {
    client: 'postgresql',
    connection: {
      host:'127.0.0.1',
      database: 'postgres',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
