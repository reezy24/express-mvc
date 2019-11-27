const express = require("express")
const router = express.Router()
const ContactsController = require("./controllers/contacts_controller")

router.get("/", ContactsController.newContact)

router.get("/contacts", ContactsController.index)

router.post("/contacts", ContactsController.create)

module.exports = router