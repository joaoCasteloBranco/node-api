'use strict'

const express = require('express')
const controller = require('../controllers/product-controller')
const router = express.Router()

router.post('/', controller.post)
router.get('/', controller.get)
router.get('/:slug', controller.getBySlug)
router.get('/admin/:id', controller.getById)
router.get('/tags/:tag', controller.getByTag)
router.put('/:id', controller.put)
router.delete('/:id', controller.delete)

module.exports = router; 