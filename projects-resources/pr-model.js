const db = require('../data/db-config')
const { addResource } = require('../resources/resources-model')


function getProjectResources(id) {
    return db('project_resource as pr')
        .join('project', 'pr.project_id', 'project.id')
        .join('resource', 'pr.project_id', 'resource.id')
        .where('project.id', id)
        .select('project.name as project_name', 'resource.name as resource_name')
}

function addResourceToProject(id, body) {
    return db('project_resource as pr')
        .join('project', 'pr.project_id', 'project.id')
        .join('resource', 'pr.project_id', 'resource.id')
        .where('project.id', id)
        .insert(body)
}

module.exports = {
    getProjectResources,
    addResourceToProject
}