const mongoose = require("mongoose");

const publicationsSchema = new mongoose.Schema({
  publication_description: {type: String},
  username_publishing: {type: String},
  publication_date: {type: Date, default: Date.now },
  has_attachment: {type: Boolean}
});

const Publications = mongoose.model("Publications", publicationsSchema);

module.exports = Publications;