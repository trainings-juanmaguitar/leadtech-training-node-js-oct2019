const express = require('express')
const router = express.Router()

const getCats = require('./handlers/getCats')
const getCatsNamesByMaxLengthName = require('./handlers/getCatsNamesByMaxLengthName')
const addCat = require('./handlers/addCat')

const getCatById = require('./handlers/getCatById')
const updateCatById = require('./handlers/updateCatById')
const removeCatById = require('./handlers/removeCatById')

router.get('/cats', getCats)
router.get('/cats/length/:length', getCatsNamesByMaxLengthName)
router.post('/cats', addCat)

router.get('/cat/:id', getCatById)
router.put('/cat/:id', updateCatById)
router.delete('/cat/:id', removeCatById)

module.exports =  router