const { CityService } = require('../services/index');

//create object of CitySErvice:
const cityService = new CityService();

const create = async (req , res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully created the city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create the city ",
            err: error
        });
        // we will not throw error because we will never able to map the error.
    }
}

//Create object:
const createAll = async (req , res) => {
    try {
        const city = await cityService.createAll(req.body);
        return res.status(201).json({
            data:  city ,
            success: true,
            message: "Successfully created the All city",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create cities ",
            err: error
        });
    }
}

//DELETE. -> /city/:id
const destroy = async (req , res) => {
    try {
        const response = await cityService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a city ",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city ",
            err: error
        });
    }
}

//UPDATE -> city/:id -> req.body
const update = async (req , res) => {
    try {
        const response = await cityService.update(req.params.id , req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a city ",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city ",
            err: error
        });
    }
}

//GET-> city/:id
const get = async (req , res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully got a city ",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city ",
            err: error
        });
    }
}

const getAll = async (req , res) => {
    try {
        const cities = await cityService.getAll(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "Successfully got all cities ",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get cities ",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll,
    createAll
}