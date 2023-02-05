const    CrudService    = require('./crud-service');
const { CityRepository } = require('../repository/index');

class CityService extends CrudService{
     
    constructor(){
        const cityRepository = new CityRepository();
        super(cityRepository);
        this.cityRepository = cityRepository;
    }
    
        async createAll( data ){
        try {
            const  city  = await this.cityRepository.createAll( data );
            return { city };
        } catch (error) {
            console.log("Something went wrong at Service Layer ");
            throw {error};
        }
    }

          async getAll(filter){
        try {
            const cities = await this.cityRepository.getAll({name : filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at Service Layer ");
            throw {error};
        }
    } 

}


module.exports = CityService;