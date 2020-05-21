const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');


routes.post('/admin/produto', async (request, response) => {
    const {
        img,
        titulo,
        descricao,
        detalhes,
        preco,
        desconto} = request.body;


    await connection('produto').insert({
        img,
        titulo,
        descricao,
        detalhes,
        preco,
        desconto   
    })
    return response.json();
});

/*routes.get('/admin/produto', (request, response) =>{
    
})*/

module.exports = routes;