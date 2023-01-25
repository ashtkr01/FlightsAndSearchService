const { FlightRepository , AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!(compareTime(data.arrivalTime , data.departureTime))){
                throw {error : 'Arrival time can not be smaller than Departure Time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong int Service ");
            throw {error};
        }
    }

    async getFlightData(){
        //to do
    }
}

module.exports = FlightService;