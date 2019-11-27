const { add, get } = require("../models/contacts.js")

function newContact(req, res) {
    res.render("home")
}

function create(req, res) {
    console.log(req.body)
    let { name, email } = req.body
    res.render("success", add( name, email ))
}

function index(req, res) {
    res.send(get())
}

module.exports = {
    newContact, 
    create,
    index
}