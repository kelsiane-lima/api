const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        try {
            const product = await connection('produtos').select('*');

            return response.json(product);
        } catch (error) {
            next(error)
        }

    },


    async create(request, response, next) {
        try {
            const { categoria_id_, fornecedor_id_, qtd, qtd_limite, tipo, nome } = request.body;

            await connection('produtos').insert({
                categoria_id_,
                fornecedor_id_,
                nome,
                qtd,
                qtd_limite,
                tipo

            });
            return response.send().status(201);
        } catch (error) {
            next(error)
        }

    },

    async delete(request, response, next) {
        try {
            const { produto_id } = request.params;

            await connection('produtos').where('produto_id', produto_id).delete();

            return response.status(201).send();
        } catch (error) {
            next(error);
        }

    },
    //vendendo produto!!
    async edit(request, response, next) {
        try {
            const { produto_id, qtd, op } = request.params;
            const product = await connection('produtos').where('produto_id', produto_id).select('qtd').first();
            // Operacao de comprar
            if (op == 1) {
                if (product.qtd < qtd) {
                    return response.status(401).json({ error: 'Operacao negada!!' });
                }
                await connection('produtos').where('produto_id', produto_id).update('qtd', product.qtd - qtd);
                return response.status(201).send();
                //acrescentar ao estoque
            } else if (op == 0) {
                await connection('produtos').where('produto_id', produto_id).update('qtd', parseInt(product.qtd) + parseInt(qtd));
                return response.status(201).json("Estoque abastecido!!");
            }
            return response.status(201).send();
        } catch (error) {
            next(error);
        }

    }
}