const express = require('express')

const router = express.Router()

const { findProjects, addProject } = require('./projects-model')

//GET all projects
router.get('/', (req, res) => {
    findProjects()
        .then(projects => {
            res.status(200).json({ data: projects })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})

//POST new project
router.post('/', (req, res) => {
    addProject(req.body)
        .then(id => {
            res.status(201).json({ message: `successfully added new project with id of ${id}` })
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        })
})


module.exports = router