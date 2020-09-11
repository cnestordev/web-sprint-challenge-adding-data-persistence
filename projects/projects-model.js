const db = require('../data/db-config')

function findProjects() {
    return db('project')
}

function addProject(body) {
    return db('project')
        .insert(body)
}

module.exports = {
    findProjects,
    addProject
}