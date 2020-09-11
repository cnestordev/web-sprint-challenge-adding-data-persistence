
exports.up = function (knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments()
        tbl.string('name').notNull()
        tbl.string('description')
        tbl.boolean('complete').defaultTo(0)
    }).createTable('resource', tbl => {
        tbl.increments()
        tbl.string('name').notNull()
        tbl.string('description')
    }).createTable('task', tbl => {
        tbl.increments()
        tbl.integer('task_id').references('id').inTable('project').notNull().onDelete('CASCADE').onUpdate('CASCADE')
        tbl.string('description').notNull()
        tbl.string('notes')
        tbl.boolean('complete').defaultTo(0)
    }).createTable('project_resource', tbl => {
        tbl.integer('project_id').references('id').inTable('project').notNull().onDelete('CASCADE').onUpdate('CASCADE')
        tbl.integer('resource_id').references('id').inTable('resource').notNull().onDelete('CASCADE').onUpdate('CASCADE')
        tbl.primary(['project_id', 'resource_id'])
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
