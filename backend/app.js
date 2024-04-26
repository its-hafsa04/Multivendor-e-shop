const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const CookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const shop = require("./controller/shop");

app.use(express.json());
app.use(CookieParser());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
})); 
app.use('/' , express.static("uploads"));  //serve pics from upload folder
app.use(bodyParser.urlencoded({extended: true})); // parse url encoded data with the query

//import routes
const user = require('./controller/user');
app.use('/api/v2/user', user);
app.use("/api/v2/shop", shop);

//config
if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path : 'backend/config/.env',
    })
}

//errorHandling
app.use(ErrorHandler);

module.exports = app;
