const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async(req , res) => {
    try {
        const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            error: "",
            message: "Successfully created an Airport"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : "",
            error: error,
            success: false,
            message: "Unable to create an Airport "
        });
    }
}

const destroy = async (req , res) => {
    try {
        const airport = await airportService.destroy(req.params.id);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully delete an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: "",
            success: false,
            message: "Not able to delete an Airport",
            error: error
        });
    }
}

const update = async (req , res) => {
    try {
        const airport = await airportService.update(req.params.id , req.body);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully updates an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update an Airport",
            error: error
        });
    }
}

const get = async (req , res) => {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully got an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get an Airport",
            error: error
        });
    }
}


const getAll = async (req , res) => {
    try {
        const airports = await airportService.getAll();
        return res.status(200).json({
            data: airports,
            success: true,
            message: "Successfully got all the airports",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get all Airports",
            error: error
        });
    }
}


module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}