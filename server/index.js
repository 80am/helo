const express = require('express')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()
const connectionString = CONNECTION_STRING = 'postgres://ktyyzazrsjmgbd:8c1de560af4f49363d7e810c96e435c1f6a6357f258ad89af45c152b253f1306@ec2-54-83-50-145.compute-1.amazonaws.com:5432/d3vjac984q7len?ssl=true'

const app = express()

const SERVER_PORT = 3333

app.post('/api/registering', ctrl.register)

massive(connectionString).then(connection => {
    app.set('db', connection)

    app.listen(SERVER_PORT, () => {
        console.log(`Mr Smith lives on ${SERVER_PORT}`)
    })
})