import mongoose from "mongoose";
import 
 config
from "./config";

export const dbConnect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${config.MONGO_USER}:${config.MONGO_PASSWORD}@${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connect dataBase");
  } catch (error) {
      console.error(error);
  }
};

module.exports = { dbConnect }
