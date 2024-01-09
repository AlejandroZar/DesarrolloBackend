const { Router } = require("express");
const router = Router();

const RatingController = require("../controllers/RatingController.js");

// Mostrar la vista de ratings
router.get("/ratings", RatingController.mostrar);

// CRUD RATINGS - CREAR UN NUEVO RATING (POST):
router.post("/ratingsPost", RatingController.createRating);

// CRUD RATINGS - OBTENER TODOS LOS RATINGS (GET):
router.get("/ratingsGet", RatingController.getAllRatings);

// CRUD RATINGS - OBTENER SÓLO 1 RATING (GET ONE):
router.get("/ratingsGet/:id", RatingController.getRatingById);

// CRUD RATINGS - ACTUALIZAR UN RATING (UPDATE):
router.put("/ratingsUpdate/:id", RatingController.updateRating);

// CRUD RATINGS - BORRAR UN RATING (DELETE):
router.delete("/ratingsDelete/:id", RatingController.deleteRating);

module.exports = router;
