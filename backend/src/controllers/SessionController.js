const connection = require('../database/connection');

module.exports = {
    async create(request, response, next){
        try {
        const {idName, password} = request.body;

        const user = await connection('usuarios').where('name', idName).andWhere('senha', password).select('name').first();

        if(!user){
            return response.status(400).json({error:'Incorrect Username or Password'});
        }

        return response.json(user);

        } catch (error) {
            next(error);    
        }
        
    }
}