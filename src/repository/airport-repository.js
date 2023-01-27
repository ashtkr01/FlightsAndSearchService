const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository{
    constructor(){
        super(Airport);
    }
}


// const { Op } =  require('sequelize');
// const { Airport } = require('../models/index'); 

// class AirportRepository{

//     async createAirport({ name , cityId }){
//         try {
//             const city = await Airport.create({name , cityId});
//             return name;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async deleteAirport(cityId){
//         try {
//             await Airport.destroy({
//                 where : {
//                     id : cityId
//                 }
//             });
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async updateAirport(cityId , data){
//         try {
//             const airport = await Airport.findByPk(cityId);
//             airport.name = data.name;
//             airport.cityId = data.cityId;
//             await airport.save();
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }

//     async getAirport(cityId){
//         try {
//             const airport = await Airport.findByPk(cityId);
//             return airport;
//         } catch (error) {
//             console.log("Something went wrong in the repository layer");
//             throw {error};
//         }
//     }
// }

module.exports = AirportRepository;
