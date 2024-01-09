const { Router } = require("express");
const router = Router();
const ModelProduct = require("../models/productModel.js");

// CRUD PRODUCTS - CREATE A NEW PRODUCT (POST):
router.post("/productsPost", async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelProduct.create(body);
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD PRODUCTS - GET ALL PRODUCTS (GET):
router.get("/productsGet", async (req, res) => {
    try {
        const respuesta = await ModelProduct.find({});
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD PRODUCTS - GET ONE PRODUCT (GET ONE):
router.get("/productsGet/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelProduct.findOne({ _id: id });
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD PRODUCTS - UPDATE A PRODUCT (UPDATE):
router.put("/productsUpdate/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const respuesta = await ModelProduct.findOneAndUpdate({ _id: id }, body);
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD PRODUCTS - DELETE A PRODUCT (DELETE):
router.delete("/productsDelete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelProduct.deleteOne({ _id: id });
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;