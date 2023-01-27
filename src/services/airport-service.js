const CrudService = require('./crud-service');
const { AirportRepository } = require('../repository/index');

class AirportService extends CrudService{
    constructor(){
        const airportRepository = new AirportRepository();
        super(airportRepository);
    }
}
// const { AirportRepository } = require('../repository/index');

// class AirportService {
//     constructor(){
//         this.airportRepository = new AirportRepository();
//     }

//     async createAirport( data ){
//         try {
//             const airport = await this.airportRepository.createAirport(data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong at Service Layer ");
//             throw {error};
//         }
//     }

//     async deleteAirport( cityId ){
//         try {
//             const response = await this.airportRepository.deleteAirport(cityId);
//             return response;
//         } catch (error) {
//             console.log("Something went wrong at Service Layer ");
//             throw {error};
//         }
//     }

//     async getAirport( cityId ){
//         try {
//             const airport = await this.airportRepository.getAirport(cityId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong at Service Layer ");
//             throw {error};
//         }
//     }

//     async updateAirport( cityId , data ){
//         try {
//             const airport = await this.airportRepository.updateAirport(cityId , data);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong at Service Layer ");
//             throw {error};
//         }
//     }
// }
module.exports = AirportService
