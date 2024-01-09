//Variables
const {Router} = require ("express") //Importar la librería express
console.log("(index.router_users) Se importó la librería express");

const router = Router() //Crear la variable router
console.log("(index.routes_users) Se creó la variable router = Router()");

const ModelUser = require("../models/userModel.js"); //Llamar al modelo users de la BD
console.log("(index.router_users) Llamar a userModel para obtener el schema users");


//CRUD USERS - CREAR UN NUEVO USUARIO (POST):
router.post("/usersPost", async(req, res) => {
    console.log("(index.router_users) Se ingresó a la función POST para crear un nuevo usuario");

    const body = req.body; //Recibir el body del request
    console.log("(index.router_users) Se recibió el body de la función");

    const respuesta = await ModelUser.create(body); //Crear un registro en la BD con el body recibido
    console.log("(index.router_users) Se creó el registro en la BD con el body recibido");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router_users) Se envió la respuesta a la página");
})


//CRUD USERS - OBTENER TODOS LOS USUARIOS (GET):
router.get("/usersGet", async(req, res) => {
    console.log("(index.router_users) Se ingresó a la función GET para obtener todos los usuarios");

    const respuesta = await ModelUser.find({}); //Obtener todos los registros de la colección users de la BD
    console.log("(index.router_users) Se trajeron todos los registros de la colección users");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router_users) Se envió la respuesta a la página");
})


//CRUD USERS - OBTENER SÓLO 1 USUARIO (GET ONE):
router.get("/usersGet:username", async(req, res) => {
    console.log("(index.router_users) Se ingresó a la función GET para obtener sólo 1 usuario en base al username");

    const username = req.params.username; //Obtener el parámetro username del request
    console.log("(index.router_users) Se obtuvo el username de los parámetros del request");

    const respuesta = await ModelUser.findOne({ username: username}); //Buscar el registro en la colección users de la BD
    console.log("(index.router_users) Se obtuvo el registro en base al parámetro username: " + username.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router_users) Se envió la respuesta a la página");
})


//CRUD USERS - ACTUALIZAR UN USUARIO (UPDATE):
router.put("/usersUpdate:id", async(req, res) => {
    console.log("(index.router_users) Se ingresó a la función UPDATE para actualizar los valores de un usuario");

    const id = req.params.id; //Obtener el parámetro username del request
    console.log("(index.router_users) Se obtuvo el id de los parámetros del request");

    const body = req.body; //Recibir el body del request
    console.log("(index.router_users) Se recibió el body de la función");

    const respuesta = await ModelUser.findOneAndUpdate({ _id: id}, body); //Buscar el registro en la colección users de la BD y actualizarlo
    console.log("(index.router_users) Se actualizó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router_users) Se envió la respuesta a la página");
})

//CRUD USERS - BORRAR UN USUARIO (DELETE):
router.delete("/usersUpdate:id", async(req, res) => {
    console.log("(index.router_users) Se ingresó a la función DELETE para borrar un usuario");

    const id = req.params.id; //Obtener el parámetro username del request
    console.log("(index.router_users) Se obtuvo el id de los parámetros del request");

    const respuesta = await ModelUser.deleteOne({ _id: id}); //Buscar el registro en la colección users de la BD y borrarlo
    console.log("(index.router_users) Se eliminó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router_users) Se envió la respuesta a la página");
})

module.exports = router; //Exportar la variable al modelo
console.log("(index.router_users) se exportó el router con module.exports");