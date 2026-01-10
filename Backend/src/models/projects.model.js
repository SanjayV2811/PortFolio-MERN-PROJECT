const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: String,
    domain: String,
    description: String,
    link: String,
    projectImage: Buffer,
    projectImageName: String,
    icon: String,
    category: String,

    isFavorite: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
