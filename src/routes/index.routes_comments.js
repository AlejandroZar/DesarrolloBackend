const { Router } = require("express");
const router = Router();

const ModelComments = require("../models/commentsModel.js");
const CommentsController = require("../controllers/CommentsController.js");


// Mostrar la vista de reviews
router.get("/comments", CommentsController.mostrar);

// CRUD COMENTARIOS - CREAR UN NUEVO COMENTARIO (POST):
router.post("/commentsPost", CommentsController.createComments);

// CRUD COMENTARIOS - OBTENER TODOS LOS COMENTARIOS (GET):
router.get("/commentsGet", CommentsController.getAllComments);

// CRUD COMENTARIOS - OBTENER SÓLO 1 COMENTARIO (GET ONE):
router.get("/commentsGet/:id", CommentsController.getCommentsById);

// CRUD COMENTARIOS - ACTUALIZAR UN COMENTARIO (UPDATE):
router.put("/commentsUpdate/:id", CommentsController.updateComments);

// CRUD COMENTARIOS - BORRAR UN COMENTARIO (DELETE):
router.delete("/commentsDelete/:id", CommentsController.deleteComments);

module.exports = router;