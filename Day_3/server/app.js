const express = require("express");
const bodyParser = require("body-parser");
const routerNotes = require("./routes/notes");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://Kiba:28091984@cluster0-yzt34.gcp.mongodb.net/test?retryWrites=true"
);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use("/notes", routerNotes);

app.get("/", (req, res) => res.send("Hello!"));

app.use((req, res, next) => {
  res.status(404).json({ err: "404" });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ err: "500" });
});

app.listen(3003, function() {
  console.log("Server running. Use our API");
});
