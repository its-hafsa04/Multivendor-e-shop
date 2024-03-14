const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.connect(process.env.DB_URL).then((data) =>{
        console.log(`mongodb is connected to server:${data.connection.host}`);
    })
}

module.exports = connectdb;