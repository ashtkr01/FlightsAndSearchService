const CrudRepository  = require('./crud-repository');
const { City } = require('../models/index');
const { Op } = require('sequelize');

class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
    //Additional :
        async createAll( names ) {
        try {
            const cities = await City.bulkCreate(names , {returning: true});
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    //To get all city based on filters:
        async getAll(filter){
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = CityRepository;