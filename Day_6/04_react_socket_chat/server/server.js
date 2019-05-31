const mongoose = require("mongoose");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const Message = require("./model/schema");
const cors = require("cors");

const io = require("socket.io")(server, {
  path: "/chat/",
  origins: "*:*"
});

const PORT = process.env.PORT || 3002;
app.use(cors());
app.options("*", cors());
mongoose.Promise = global.Promise;
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(
  "mongodb+srv://nataly:Happy999@cluster0-4v8sp.gcp.mongodb.net/test?retryWrites=true"
);

let online = 0;
io.on("connection", socket => {
  console.log("User connected");
  ++online;
  const allMessages = Message.find();
  socket.broadcast.emit("all-messages", allMessages);
  socket.broadcast.emit("change-online", online);
  socket.on("message", message => {



    const cors = require('cors');

    app.use(cors());
    app.options('*', cors());

    console.log(message);
    client.broadcast.emit("new-message", message);

    const newMessage = Message(message)
    console.log(newMessage);
    newMessage.save();


    // Message.create(message, err => {
    //   if(err) console.error(err)
    //   socket.broadcast.emit('new-message', message);
    // })


  });
  socket.on("disconnect", () => {
    --online;
    socket.broadcast.emit("change-online", online);
  });
});

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));