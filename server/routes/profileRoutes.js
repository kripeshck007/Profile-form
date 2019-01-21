const express = require('express')
const ServerPortRouter = express.Router()

const ServerPort = require('../model/model')

ServerPortRouter.route('/add').post(function(req, res) {
    const serverport = new ServerPort(req.body)
    serverport.save()
        .then(serverport => {
            res.json('Server added successfully')
        })
        .catch(err => {
            res.status(400).send('unable to save to database')
        })
})

ServerPortRouter.route('/').get(function(req, res) {
    ServerPort.find(function(err, serverports) {
        if (err) {
            console.log(err)
        } else {
            res.json(serverports)
        }
    })
})
ServerPortRouter.route('/:id')
    .get((req, res) => {
        ServerPort.findOne({ _id: req.params.id }, function(err, data) {
            console.log("sss", data)
            if (err)
                throw err
            res.json(data)
        })
    })
ServerPortRouter.route('/:id/update').put(function(req, res) {
    ServerPort.findOne({ _id: req.params.id }, function(err, data) {
        var colloction = data
        colloction.email = req.body.email
        colloction.firstname = req.body.firstname
        colloction.lastname = req.body.lastname
        colloction.biography = req.body.biography
        colloction.profileImageUrl = req.body.profileImageUrl
        colloction.twitter = req.body.twitter
        colloction.facebook = req.body.facebook
        colloction.googleplus = req.body.googleplus

        colloction.save(function(err, data) {
            if (err)
                throw err
            res.json(data)
        })
    })
})

module.exports = ServerPortRouter