const express = require("express")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")
const routes = require("./routes.js")
const port = 4114

const app = express()

// initialise view engine
app.engine("handlebars", handlebars())

// tell express to use this view engine
app.set("view engine", "handlebars")

app.use(express.static('styles'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.use(routes)

app.listen(port, () => console.log(`Server running on port ${port}`))





