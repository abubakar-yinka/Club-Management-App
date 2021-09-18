const express = require('express');

require('dotenv').config()
const config = require('./config/app')

const app = express();

const port = config.appPort;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});