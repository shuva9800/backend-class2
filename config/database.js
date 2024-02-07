const mongoose=require('mongoose');

require("dotenv").config();

// const dbconnect = () =>
function dbconnect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("Connection Successful")})
    .catch( (error) => {console.log("Recieved an error" + error)} );

}

// mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })
// .then(() => {console.log("Connection Successful")})
// .catch( (error) => {console.log("Recieved an error" + error)} );