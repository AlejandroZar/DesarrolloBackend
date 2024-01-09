const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require('bcrypt');
const mongose = require('mongoose');

const router = express.Router();

const registerController = require("../controllers/RegisterController")

router.get("/register", registerController.mostrar)

module.exports = router
