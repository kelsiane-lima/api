const crypto = require('crypto');
const connection = require('../database/connection');


const alg = 'aes-256-ctr'
const pwd = 'kelsiane'

const text = 'chupa cabra'
const cipher = crypto.createCipher(alg,pwd)
const crypted =cipher.update(text,'utf8',   'hex')
console.log(crypted)



module.exports = {
    async index(request, response, next){
        try {
            const user = await connection('usuarios').select('*');
    
            return response.json(user);

        } catch (error) {
            next(error);
        }
        
    },

    async create(request, response){
        const {name, senha} = request.body;

        // const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuarios').insert({
            
            name,
            senha
        });

          return response.send();
    }
}