const app = require('./api/server')

const port = process.env.PORT || 8000

const projectRouter = require('./projects/projects-router')
const resourceRouter = require('./resources/resources-router')
const taskRouter = require('./tasks/tasks-router')
const prRouter = require('./projects-resources/pr-router')

app.use('/api/projects', projectRouter)
app.use('/api/resources', resourceRouter)
app.use('/api/tasks', taskRouter)
app.use('/api/pr', prRouter)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})