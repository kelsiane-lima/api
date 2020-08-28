const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const user = await connection('usuarios').select('*');
    
        return response.json(user);
    },

    async create(request, response){
        const {name, senha} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuarios').insert({
            id,
            name,
            senha,
        });

        return response.json({id});
    }
}