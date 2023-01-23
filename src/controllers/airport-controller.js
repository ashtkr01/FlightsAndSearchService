const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req , res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
           data: airport,
           success: true,
           message: "Successfully Create an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create an Airport",
            error: error
        });
    }
}

const destroy = async (req , res) => {
    try {
        const airport = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully delete an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an Airport",
            error: error
        });
    }
}
const update = async (req , res) => {
    try {
        const airport = await airportService.updateAirport(req.params.id , req.body);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully delete an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an Airport",
            error: error
        });
    }
}

const get = async (req , res) => {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(200).json({
           data: airport,
           success: true,
           message: "Successfully delete an Airport",
           error: {} 
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete an Airport",
            error: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get
}