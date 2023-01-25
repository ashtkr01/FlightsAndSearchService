const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req , res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'successfully Created'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to create Flight'
        })
    }
}

const getAll = async (req , res) => {
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : "Information is successfully fetched"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to fetch any Flight'
        })
    }
}

module.exports = {
    create,
    getAll
}