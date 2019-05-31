const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let noteSchema = new Schema({
  text: String,
  createdAt: Date
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
