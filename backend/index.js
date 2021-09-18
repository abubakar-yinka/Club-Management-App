const express = require('express');

require('dotenv').config()

const config = require('./config/app')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

const router = require('./router/index')

app.use(router)

const port = config.appPort;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});