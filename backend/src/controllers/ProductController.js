const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const product = await connection('produtos').select('*');
        if (product.length == 0){
            response.json("product not found").status(401);
        }
        
        return response.json(product);
    },

    async create(request, response){
        const {name, qtd, qtd_limite, tipo} = request.body;

        await connection('produtos').insert({
            name, 
            qtd, 
            qtd_limite, 
            tipo
        });

        return response.json("product inserido com sucesso!!!").status(201);
    },

    async delete(request, response){
        const {id} = request.params;

        await connection('produtos').where('id', id).delete();

        return response.status(204).send();
    },
//vendendo produto!!
    async edit(request, response){
        const {id, qtd, op} = request.params;

        const product = await connection('produtos').where('id', id).select('qtd').first();
// Operacao de comprar
        if(op == 1){
            if(product.qtd < qtd){
                return response.status(401).json({ error:'Operacao negada!!'});
            }
    
            await connection('produtos').where('id', id).update('qtd', product.qtd - qtd);
            return response.status(204).json("Compra Realizada!!");
            //acrescentar ao estoque
        } else if(op == 0){
            await connection('produtos').where('id', id).update('qtd', parseInt(product.qtd) + parseInt(qtd));
            return response.status(204).json("Estoque abastecido!!");
        }        

        return response.status(204).send();
    }
}