'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/organizerController')

router.post('/organizer', controller.createOrganizer)
router.get('/organizers', controller.getOrganizers)

module.exports = router
