const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String },
    precio: { type: Number },
    moneda: { type: String },
    descripción: { type: String },
    proveedor: { type: String },
    tag: [{ type: String }],
    cantidad: { type: Number },
    creado: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;