import * as dotenv from 'dotenv';
dotenv.config();

const mongoose = require("mongoose")
const URL_SERVER_MONGO = "mongodb+srv://admin:manu1054@cluster0.rvi4d.mongodb.net/test_prueba";

export const dbConnect = async () => {
     
    console.log(`URL CONNECT  =>${URL_SERVER_MONGO}`);
    try {
       await mongoose.connect( URL_SERVER_MONGO, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true
          });  
          console.log("Connect Database");
      } catch (error) {
          console.error(error);
      }
}

module.exports = { dbConnect };

