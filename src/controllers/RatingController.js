const Rating = require("../models/ratingModel");

module.exports.mostrar = async (req, res) => {
  try {
    const ratings = await Rating.find({});
    res.render("ratings", { ratings }); // Cambia el nombre de la vista si es necesario
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los ratings", error: error.message });
  }
};

module.exports.createRating = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await Rating.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el rating", error: error.message });
  }
};

module.exports.getAllRatings = async (req, res) => {
  try {
    const respuesta = await Rating.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los ratings", error: error.message });
  }
};

module.exports.getRatingById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Rating.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el rating", error: error.message });
  }
};

module.exports.updateRating = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await Rating.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el rating", error: error.message });
  }
};

module.exports.deleteRating = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Rating.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el rating", error: error.message });
  }
};
