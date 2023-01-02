const express = require('express');//obtener dependencia
const cors = require('cors');
const routes = require('./routes');
const logging = require('./middlewares/logging');

const app = express();//crear aplicacion con funcion de alto nivel


app.use(logging);
app.use(cors());

app.use(express.static('static'));
app.use('/api', routes);

app.listen(3000);