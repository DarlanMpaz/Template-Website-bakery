const express = require('express');
const routes = express.Router();


routes.post('/admin/produto', (request, response) => {
    const data =  request.body;

    console.log(data);
    
    return response.json();
});

routes.get('/admin/produto', (request, response) =>{
    re
})

module.exports = routes;