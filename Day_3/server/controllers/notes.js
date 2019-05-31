const database = require("../models/database");

module.exports.delNote = function(req, res) {
  database
    .delNote(req.params.id)
    .then(() => {
      res.send("Note was del!!");
    })
    .catch(err => {
      res.status(400).json({ err: err.message });
    });
};

module.exports.getAllNotes = function(req, res) {
  database
    .getAll()
    .then(results => res.send(results))
    .catch(err => {
      res.status(400).json({ err: err.message });
    });
};

module.exports.getNote = function(req, res) {
  database
    .getById(req.params.id)
    .then(results => {
      if (results) {
        res.json(results);
      } else {
        res.status(400).json({ err: "Note not found" });
      }
    })
    .catch(err => {
      res.status(400).json({ err: err.message });
    });
};

module.exports.addNote = function(req, res) {
  database
    .addNote(req.body)
    .then(results => {
      res.status(201).json(results);
    })
    .catch(err => {
      res.status(400).json({ err: err.message });
    });
};

module.exports.updateNote = function (req, res) {
  database
      .updateNote(req.params.id, req.body)
      .then((results) => {
        if (results) {
          res.json(results);
        } else {
          res
            .status(400)
            .json({err: 'Note not found'});
        }
      })
      .catch((err) => {
        res
          .status(400)
          .json({err: err.message});
      })
  }