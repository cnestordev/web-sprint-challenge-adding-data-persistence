const app = require('./api/server')

const port = process.env.PORT || 8000

const projectRouter = require('./projects/projects-router')

app.use('/api/projects', projectRouter)


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})