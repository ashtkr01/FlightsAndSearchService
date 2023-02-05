const express = require("express");
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightController = require('../../controllers/flight-controller');

const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();
//City:
router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);
router.post('/cityBulk',CityController.createAll);
//Airport:
router.post('/airport',AirportController.create);
router.delete('/airport/:id',AirportController.destroy);
router.get('/airport/:id',AirportController.get);
router.patch('/airport/:id',AirportController.update);
router.get('/airports' , AirportController.getAll);

//Flight:
router.get('/flights',FlightController.getAll);
router.post('/flights',FlightMiddlewares.validateCreateFlight , FlightController.create);

module.exports = router;