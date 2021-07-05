const db = require('../data/db-config')

function findResource() {
    return db('resource')
}

function addResource(body) {
    return db('resource')
        .insert(body)
}

module.exports = {
    findResource,
    addResource
}