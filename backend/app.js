const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const CookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(CookieParser());
app.use(cors()); // enable all global requests
app.use('/' , express.static("uploads"));  //serve pics from upload folder
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'})); // parse url encoded data with the query

//import routes
const user = require('./controller/user');
app.use('/api/v2/user', user);

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path : 'backend/config/.env',
    })
}

//errorHandling
app.use(ErrorHandler);

module.exports = app;
