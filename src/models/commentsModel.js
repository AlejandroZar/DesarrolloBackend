const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    comment: { type: String },
    username: { type: String },
    publication_description: { type: String },
    comment_date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comments = mongoose.model("Comments", commentsSchema);

module.exports = Comments;