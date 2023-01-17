const express = require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () => {
    //CReate the express object :
    const app = express();
    app.listen(PORT , () => {
        console.log(`Server started at ${PORT}`);
    });

}


setupAndStartServer();