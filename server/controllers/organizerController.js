'use strict'

const organizer = require('../models/organizers')

let methods = {}

methods.createOrganizer = (req, res) => {
  organizer.create(req.body)
    .then((organizer) => {
      res.send({
        message: 'Succsess',
        organizer: organizer
      })
    })
    .catch((error) => {
      res.send({
        error: error
      })
    })
}

methods.getOrganizers = (req, res) => {
  organizer.find()
    .then((organizers) => {
      res.send({
        organizers: organizers
      })
    })
    .catch((error) => {
      res.send({
        error: error
      })
    })
}

module.exports = methods
