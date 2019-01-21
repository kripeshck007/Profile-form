const express = require('express')
const cors = require('cors')
var bodyparser = require('body-parser')
var app = new express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const ServerPortRouter = require('./routes/profileRoutes')

app.use('/serverport', ServerPortRouter)
app.listen(4000, function() {
    console.log('listening to port 4000')
})