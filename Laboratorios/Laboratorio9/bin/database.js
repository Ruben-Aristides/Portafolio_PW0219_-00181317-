var mongoose = require('mongoose');

let database = 'RegistroApi';
let port = '27017';
let host = 'localhost';
let uri = `mongodb://${host}:${port}/${database}`;

const connectDB = () =>{
    mongoose.Promise = global.Promise;

    mongoose
        .connect(uri,{useNewUrlParser: true})
        .then(() => {
            console.log("conectado a la base");
        })
        .catch(()=>{
            console.log("Un error ocurrio");
        });
};

module.exports = {
    connectDB
};