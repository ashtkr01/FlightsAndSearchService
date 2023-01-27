const { ClientErrorCodes } = require('../utils/error-codes');
const validateCreateFlight = (req , res , next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime || 
        !req.body.price
    ){
        //if any of the body params is missing we will inside the if :
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data : "",
            error: 'Missing mandatory body to create a flight',
            message: 'Invalid object body for creation of flight',
            success: false
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}