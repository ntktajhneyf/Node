const mongoose = require("mongoose");

const Notes = require("../models/note");

module.exports.setUpConnection = function() {
  mongoose.connect(
    "mongodb+srv://Kiba:28091984@cluster0-yzt34.gcp.mongodb.net/test?retryWrites=true"
  );
};

module.exports.createNote = function(data) {
  console.log(data);
  const note = new Notes({
    text: data.text,
    createdAt: new Date()
  });

  return note.save();
};

module.exports.noteList = function() {
  return Notes.find();
};

module.exports.delNote = function(id) {
  return Notes.findById(id).remove();
};
