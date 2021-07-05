const express = require('express')

const router = express.Router()

const db = require('../data/db-config')

const { findResource, addResource } = require('./resources-model')

//GET all resources
router.get('/', (req, res) => {
    findResource()
        .then(resources => {
            res.status(200).json({ data: resources })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

router.post('/', (req, res) => {
    addResource(req.body)
        .then(id => {
            res.status(201).json({ message: `succesfully added resource with id ${id}` })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

module.exports = router