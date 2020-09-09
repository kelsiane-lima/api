const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const categoria = await connection('categorias').select('*');

            return response.json(categoria);

        } catch (error) {
            next(error)
        }

    },

    async create(request, response, next) {
        try {
            const { nome } = request.body;

            await connection('categorias').insert({
                nome
            });

            return response.send().status(201);
        } catch (error) {
            next(error)
        }

    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            await connection('categorias').where('id', id).delete();

            return response.status(204).send();
        } catch (error) {
            next(error)
        }

    }
}