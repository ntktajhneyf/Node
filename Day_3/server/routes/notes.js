const express = require("express");
const router = express.Router();
const ctrlNotes = require("../controllers/notes");

router.delete("/:id", ctrlNotes.delNote);

router.get("/", ctrlNotes.getAllNotes);

router.get("/:id", ctrlNotes.getNote);

router.post("/", ctrlNotes.addNote);

module.exports = router;
