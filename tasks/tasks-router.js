const express = require('express')
const router = express.Router()

const { findTasks, addTask } = require('./tasks-model')

router.get('/', (req, res) => {
    findTasks()
        .then(tasks => {
            res.status(200).json({ data: tasks })
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})

router.post('/', (req, res) => {
    addTask(req.body)
        .then(id => {
            res.status(201).json({ message: `successfully added task with id ${id}` })
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
})


module.exports = router