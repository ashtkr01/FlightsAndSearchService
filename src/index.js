const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const { City , Airport , Airplane} = require('./models/index');


const setupAndStartServer = async () => {
    //CReate the express object :
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',ApiRoutes);
    
    app.listen(PORT , async () => {
        console.log(`Server started at ${PORT}`);

        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true}); 
        }
        
        // const city = await City.findOne({
        //     where : {
        //         id: 20
        //     }
        // });
        // const airports = await city.getAirports();

        // // const newairport = await Airport.findOne({
        // //     where:{
        // //         id:5
        // //     }
        // // });
        // // await city.addAirports(newairport);
        // console.log(city , airports);
    });

}


setupAndStartServer();