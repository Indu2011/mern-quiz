const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)

const connection = mongoose.connection;

connection.on('connected',()=>{
    console.log('Mongo Db Connection Succesful');
})

connection.on('error',(err)=>{
    console.log('Mongo Db Connection Failed');
})

module.exports = mongoose;