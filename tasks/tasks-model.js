const db = require('../data/db-config')

function findTasks() {
    return db('task')
        .select('project.name as project_name', 'project.description as project_description', 'task.description', 'task.notes', 'task.complete')
        .join('project', 'task.project_id', 'project.id')
}

function addTask(body) {
    return db('task')
        .insert(body)
}

module.exports = {
    findTasks,
    addTask
}