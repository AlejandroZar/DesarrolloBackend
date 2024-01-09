const userModel = require("../models/userModel")

module.exports.mostrar = (req, res) =>{
    //const respuesta = await userModel.find({})
    //res.send(respuesta)
    res.render("index");
}