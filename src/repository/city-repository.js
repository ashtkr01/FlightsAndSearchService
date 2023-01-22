const { City } = require("../models/index");

class CityRepository{
    
    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where : {
                    id : cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error };
        }
    }

    async updateCity(cityId , data) {
        try {
            // THis apprach is also used when we are not returning the updated data:
            // If we are using pg then we can use returning : true
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // If we want that updated data should be return then use following approach:
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(){
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = CityRepository;