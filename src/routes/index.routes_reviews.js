// index.routes_reviews.js

const { Router } = require("express");
const router = Router();

const ModelReview = require("../models/reviewModel.js");
const reviewController = require("../controllers/ReviewController.js");


// Mostrar la vista de reviews
router.get("/reviews", reviewController.mostrar);

// CRUD REVIEWS - CREAR UN NUEVO REVIEW (POST):
router.post("/reviewsPost", reviewController.createReview);

// CRUD REVIEWS - OBTENER TODOS LOS REVIEWS (GET):
router.get("/reviewsGet", reviewController.getAllReviews);

// CRUD REVIEWS - OBTENER SÓLO 1 REVIEW (GET ONE):
router.get("/reviewsGet/:id", reviewController.getReviewById);

// CRUD REVIEWS - ACTUALIZAR UN REVIEW (UPDATE):
router.put("/reviewsUpdate/:id", reviewController.updateReview);

// CRUD REVIEWS - BORRAR UN REVIEW (DELETE):
router.delete("/reviewsDelete/:id", reviewController.deleteReview);

module.exports = router;
