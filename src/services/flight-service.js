const CrudService = require('./crud-service');
const { FlightRepository , AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService extends CrudService{
    constructor(){
        const flightRepository = new FlightRepository();
        super(flightRepository);
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = flightRepository;
    }
    async create(data){
        try {
            if(!(compareTime(data.arrivalTime , data.departureTime))){
                throw {error : 'Arrival time can not be smaller than Departure Time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.create({...data,totalSeats:airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong int Service ");
            throw {error};
        }
    }


    async getFlightData(){
        //to do
    }

    async getAll(data){
        try {
            const flights = await this.flightRepository.getAll(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong int Service ");
            throw {error};
        }
    }
}

module.exports = FlightService;