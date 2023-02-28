const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req , res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price
        };
        const flight = await flightService.create(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            err: {},
            message: 'successfully Created'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Not able to create Flight'
        });
    }
}

const get = async (req , res) => {
    try {
        const response = await flightService.get(req.params.id);
        return res.status(200).json({
            data : response,
            success : true,
            err : {},
            message : "Information is successfully fetched "
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            err : error,
            message : "Not able to fetched single Flight"
        });
    }
}

const getAll = async (req , res) => {
    try {
        const response = await flightService.getAll(req.query);
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

const destroy = async (req , res) => {
    try {
        const response = await flightService.destroy(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted a flight ",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a flight ",
            err: error
        });
    }
}

const update = async(req , res) => {
    try {
        const response = await flightService.update(req.params.id , req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully updated a flight",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update the flight",
            err: error
        });
    }
}

module.exports = {
    create,
    getAll,
    get,
    destroy,
    update
}