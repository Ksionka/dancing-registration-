const express = require('express')
const { initStylesRoutes } = require('./routes/styles-routes')
const { initClassesRoutes } = require('./routes/classes-routes')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

initClassesRoutes(app)
initStylesRoutes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
