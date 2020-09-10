const crypto = require('crypto');
const connection = require('../database/connection');


const alg = 'aes-256-ctr'
const pwd = 'kelsiane'

const text = 'chupa cabra'
const cipher = crypto.createCipher(alg, pwd)
const crypted = cipher.update(text, 'utf8', 'hex')
console.log(crypted)



module.exports = {
    async index(request, response, next) {
        try {
            const user = await connection('usuarios').select('*');

            return response.json(user);

        } catch (error) {
            next(error);
        }

    },
    async edit(request, response, next){

        try {
            const {usuario_id} = request.params;
            const {nome, senha} = request.body;
            await connection('usuarios').where('usuario_id', usuario_id)
            .update('nome', nome)
            .update('senha', senha);
            return response.send().status(201)
        } catch (error) {
            next(error).status(500)
        }
    },
    async delete(request, response, next) {
        try {
            const { usuario_id } = request.params;
            await connection('usuarios').where('usuario_id', usuario_id).delete();
            return response.send().status(201)
        } catch (error) {
            next(error).status(500)
        }
    },
    async create(request, response, next) {
        try {
            const { nome,email, senha } = request.body;
    
            await connection('usuarios').insert({
    
                nome,
                email,
                senha
            });
    
            return response.send().status(201);
            
        } catch (error) {
            next(error)
        }
    }
}