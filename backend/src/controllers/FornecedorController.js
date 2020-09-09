const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const fornecedor = await connection('fornecedores').select('*');

            return response.json(fornecedor);
        } catch (error) {
            next(error)
        }

    },

    async create(request, response, next) {
        try {
            const { nome, cnpj, celular, email, endereco } = request.body;

            await connection('fornecedores').insert({
                nome,
                cnpj,
                celular,
                email,
                endereco
            });

            return response.send().status(201);

        } catch (error) {
            next(error)
        }

    },

    async delete(request, response) {
        try {
            const { id } = request.params;

            await connection('fornecedores').where('id', id).delete();

            return response.status(204).send();

        }
        catch (error) {
            next(error)
        }

    }
}