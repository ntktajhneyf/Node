const Notes = require("./note");

// module.exports.delUser = id => Users.findById({ _id: id }).remove();
module.exports.delNote = Id => Notes.deleteOne({ _id: Id });

module.exports.getAll = () => Notes.find();

module.exports.getById = id => Notes.findById({ _id: id });

module.exports.addNote = function(data) {
  let Note = new Notes({
    text: data.text,
    createdAt: new Date()
  });

  return Note.save();
};

module.exports.updateNote = (id, body) => Notes.update(
  {
      "_id": id
  }, 
  {
      $set:{
          "text": body.text, 
          "createdDate": body.createdDate,
      }
  }, 
  {
      multi:true, 
      new:true
  }
);