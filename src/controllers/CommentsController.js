const Comments = require("../models/commentsModel");

module.exports.mostrar = async (req, res) => {
  try {
    const comments = await Comments.find({});
    res.render("comments", { comments }); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los comentarios", error: error.message });
  }
};

module.exports.createComments = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await Comments.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el comentario", error: error.message });
  }
};

module.exports.getAllComments = async (req, res) => {
  try {
    const respuesta = await Comments.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los comentarios", error: error.message });
  }
};

module.exports.getCommentsById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Comments.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el comentario", error: error.message });
  }
};

module.exports.updateComments = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await Comments.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el comentario", error: error.message });
  }
};

module.exports.deleteComments = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Comments.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el comentario", error: error.message });
  }
};