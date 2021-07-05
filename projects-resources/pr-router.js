const express = require('express')
const router = express.Router()

const { getProjectResources, addResourceToProject } = require('./pr-model')

router.get('/:id', (req, res) => {
    const id = Number(req.params.id)
    getProjectResources(id)
        .then(b => {
            res.status(200).json({ data: b })
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

router.post('/:id', (req, res) => {
    const id = Number(req.params.id)
    addResourceToProject(id, req.body)
        .then(id => {
            res.status(201).json({ data: id })
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

module.exports = router