// reviewModel.js

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    review: { type: String, required: true },
    product: { type: String, required: true },
    review_date: { type: Date, default: Date.now },
    username: { type: String, required: true },
    product_stars: { type: Number, required: true, min: 1, max: 5 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
