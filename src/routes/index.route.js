const express = require("express")
const router = express.Router()

const alumnoController = require("../controllers/AppController")

router.get("/inicio", alumnoController.mostrar)

module.exports = router

