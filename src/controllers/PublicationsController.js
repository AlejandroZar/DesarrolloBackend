const Publications = require("../models/publicationsModel");

module.exports.mostrar = async (req, res) => {
  try {
    const publications = await Publications.find({});
    res.render("publications", { publications }); // Pasar el array de publications a la vista
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las publicaciones", error: error.message });
  }
};

module.exports.createPublications = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await Publications.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la publicación", error: error.message });
  }
};

module.exports.getAllPublications = async (req, res) => {
  try {
    const respuesta = await Publications.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los publications", error: error.message });
  }
};

module.exports.getPublicationsById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Publications.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la publicación", error: error.message });
  }
};

module.exports.updatePublications = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await Publications.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la publicación", error: error.message });
  }
};

module.exports.deletePublications = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Publications.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la publicación", error: error.message });
  }
};