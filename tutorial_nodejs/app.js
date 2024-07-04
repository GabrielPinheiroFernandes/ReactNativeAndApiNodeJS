const express = require('express');
const app = express();

const cors = require('cors')

//const db = require('./db/models');

app.use(express.json());

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*"); // Permite todas as origens (substitua * pelo domínio específico se desejar)

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE"); // Métodos HTTP permitidos

    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Cabeçalhos permitidos

    app.use(cors());

    next();

});
 
const users = require('./controllers/users');



app.use('/', users);

app.listen(8082, () => {
    console.log('Servidor iniciado na porta 8082: http://localhost:8082')
})