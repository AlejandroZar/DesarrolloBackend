// ReviewController.js

const Review = require("../models/reviewModel");

module.exports.mostrar = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.render("reviews", { reviews }); // Pasar el array de reviews a la vista
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los reviews", error: error.message });
  }
};

module.exports.createReview = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await Review.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el review", error: error.message });
  }
};

module.exports.getAllReviews = async (req, res) => {
  try {
    const respuesta = await Review.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los reviews", error: error.message });
  }
};

module.exports.getReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Review.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el review", error: error.message });
  }
};

module.exports.updateReview = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await Review.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el review", error: error.message });
  }
};

module.exports.deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Review.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el review", error: error.message });
  }
};
