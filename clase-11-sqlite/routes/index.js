const express = require('express');
const carsRoutes = require('./cars');
const userRoutes = require('./users');

const apiRoutes = express.Router();

apiRoutes.use('/users', userRoutes);
apiRoutes.use('/cars', carsRoutes);

module.exports = apiRoutes;