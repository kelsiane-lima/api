const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const { name } = request.params;
            const product = await connection('produtos').where('name', 'like', '%' + name + '%').select('*');

            return response.json(product);

        } catch (error) {
            next(error)
        }

    },

    async relatorio(request, response, next) {
        try {
            const product = await connection('produtos').whereRaw('produtos.qtd <= produtos.qtd_limite').select('*');

            return response.json(product);

        } catch (error) {
            next(error)
        }

    }
}