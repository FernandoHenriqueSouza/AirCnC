const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const path = require('path');

const routes = require('./routes');


const app = express ();

mongoose.connect('mongodb://localhost:27017/aircnc', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Get(Buscar), Post (enviar), put (editar), delete. 

//req.query = Acessar query params (Para filtro)
//req.query = acessar route params (para edição, delete)
// req.body = acessar corpo da requisição (para criação e ediação)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads' )))
app.use(routes);


app.listen(3333);

