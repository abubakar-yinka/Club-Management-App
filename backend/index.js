const express = require('express');
const config = require('./config/app')
const router = require('./router')
const cors = require('cors');

const app = express();

const http = require('http')

require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


app.use(cors())
app.use(router)

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads'))

const port = config.appPort;

// const server = http.createServer(app)
// const SocketServer = require('./socket')
// SocketServer(server)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

