"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
try {
    app.listen(PORT, () => {
        console.log(`listen port ${PORT}`);
    });
}
catch (error) {
    console.error(`Error listen : ${error}`);
}
//# sourceMappingURL=app.js.map