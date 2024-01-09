
/*//Variables
const {Router} = require ("express") //Importar la librería express
console.log("(index.router) Se importó la librería express");

const router = Router() //Crear la variable router
console.log("(index.router) Se creó la variable router = Router()");

const ModelPublications = require("../models/publicationsModel.js"); //Llamar al modelo PUBLICATIONS de la BD
console.log("(index.router) Llamar a userModel para obtener el schema publications");

//Función GET para lo primero que se ve al poner localhost:3000/
router.get("/", (req, res) => {
    res.send("CRUD - Grupo 10");
    console.log("(index.router) se envió la respuesta al GET para cuando se recibe /");
});

//---------------------------------------------------PUBLICATIONS INI----------------------------------------------------------
//CRUD PUBLICATIONS - CREAR UN NUEVO PUBLICACIÓN (POST):
router.post("/publicationsPost", async(req, res) => {
    console.log("(index.router) Se ingresó a la función POST para crear una nueva publicación");

    const body = req.body; //Recibir el body del request
    console.log("(index.router) Se recibió el body de la función");

    const respuesta = await ModelPublications.create(body); //Crear un registro en la BD con el body recibido
    console.log("(index.router) Se creó el registro en la BD con el body recibido");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD PUBLICATIONS - OBTENER TODOS LOS PUBLICACIÓN (GET):
router.get("/publicationsGet", async(req, res) => {
    console.log("(index.router) Se ingresó a la función GET para obtener todas las publicaciones");

    const respuesta = await ModelPublications.find({}); //Obtener todos los registros de la colección publications de la BD
    console.log("(index.router) Se trajeron todos los registros de la colección publications");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD PUBLICATIONS - OBTENER SÓLO 1 publicacion (GET ONE):
router.get("/publicationsGet:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función GET para obtener sólo 1 publicacion en base al id de la publicación");

    const username_publishing = req.params.id; //Obtener el parámetro id del request
    console.log("(index.router) Se obtuvo el username de los parámetros del request");

    const respuesta = await ModelPublications.findOne({ _id: id}); //Buscar el registro en la colección publications de la BD
    console.log("(index.router) Se obtuvo el registro en base al parámetro id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD PUBLICATIONS - ACTUALIZAR UNA PUBLICACION (UPDATE):
router.put("/publicationsUpdate:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función UPDATE para actualizar los valores de una publicacion");

    const id = req.params.id; //Obtener el parámetro id del request
    console.log("(index.router) Se obtuvo el id de los parámetros del request");

    const body = req.body; //Recibir el body del request
    console.log("(index.router) Se recibió el body de la función");

    const respuesta = await ModelPublications.findOneAndUpdate({ _id: id}, body); //Buscar el registro en la colección publications de la BD y actualizarlo
    console.log("(index.router) Se actualizó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})

//CRUD PUBLICATIONS - BORRAR UNA PUBLICACION (DELETE):
router.delete("/publicationsUpdate:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función DELETE para borrar un PUBLICACIÓN");

    const id = req.params.id; //Obtener el parámetro id del request
    console.log("(index.router) Se obtuvo el id de los parámetros del request");

    const respuesta = await ModelPublications.deleteOne({ _id: id}); //Buscar el registro en la colección publications de la BD y borrarlo
    console.log("(index.router) Se eliminó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})

//---------------------------------------------------PUBLICATIONS FIN----------------------------------------------------------

module.exports = router; //Exportar la variable al modelo
console.log("(index.router) se exportó el router con module.exports")*/
const { Router } = require("express");
const router = Router();

const ModelPublications = require("../models/publicationsModel.js");
const PublicationsController = require("../controllers/PublicationsController.js");


// Mostrar la vista de reviews
router.get("/publications", PublicationsController.mostrar);

// CRUD REVIEWS - CREAR UN NUEVO REVIEW (POST):
router.post("/publicationsPost", PublicationsController.createPublications);

// CRUD REVIEWS - OBTENER TODOS LOS REVIEWS (GET):
router.get("/publicationsGet", PublicationsController.getAllPublications);

// CRUD REVIEWS - OBTENER SÓLO 1 REVIEW (GET ONE):
router.get("/publicationsGet/:id", PublicationsController.getPublicationsById);

// CRUD REVIEWS - ACTUALIZAR UN REVIEW (UPDATE):
router.put("/publicationsUpdate/:id", PublicationsController.updatePublications);

// CRUD REVIEWS - BORRAR UN REVIEW (DELETE):
router.delete("/publicationsDelete/:id", PublicationsController.deletePublications);

module.exports = router;
