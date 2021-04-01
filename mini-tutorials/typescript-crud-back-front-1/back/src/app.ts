require('dotenv').config()
const { dbConnnect } = require('./config/database');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

try {
    dbConnect();
    app.listen(PORT , () => {
      console.log(`listen port ${PORT}`);
    })    
} catch (error) {
    console.error(`Error listen : ${error}`);
}

