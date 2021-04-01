require("dotenv").config();
const mongoose = require("mongoose")
const URL_SERVER_MONGO = process.env.URL_SERVER_MONGO;

const dbConnect = async () => {

    try {
       await mongoose.connect( URL_SERVER_MONGO, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
          });  
      } catch (error) {
          console.error(error);
      }
}

module.exports = dbConnect;

