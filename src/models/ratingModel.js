const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    stars: { type: Number },
    product: { type: String },
    comment: { type: String },
    username: { type: String },
    rating_date: { type: Date },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;