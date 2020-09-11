const app = require('./api/server')

const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})