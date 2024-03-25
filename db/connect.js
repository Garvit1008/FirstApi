const mongoose = require('mongoose');
const uri = "mongodb+srv://garvitdang10august:0ZI5QyfD2mqZZKDm@productapi.dtd2myz.mongodb.net/?retryWrites=true&w=majority&appName=ProductApi";
const connectDB = () => {
    return mongoose.connect(uri, {
    });
};
module.exports = connectDB;