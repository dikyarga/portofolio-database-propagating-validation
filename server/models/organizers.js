'user strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validate = require('mongoose-validator')

require('../config/db')

let email_validator = [
  validate({
    validator: 'isEmail',
    message: 'Email is nof valid!'
  })
]

let date_validator = [
  validate({
    validator: 'isDate',
    message: 'Format date is not valid! example :yyyy/mm/dd'
  })
]

let organizerSchema = new Schema({
  title: {
    type: String,
    required: [true, 'title is require'],
    unique: [true, 'Title name is already in userd']
  },
  name: {
    type: String,
    required: [true, 'name is require']
  },
  date: {
    type: Date,
    required: true['date is require'],
    validate: date_validator
  },
  email: {
    type: String,
    required: true['email is require'],
    validate: email_validator
  }
}, {
  timestamps: true
})

let organizer = mongoose.model('organizer', organizerSchema)

module.exports = organizer
