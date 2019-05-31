import React, { Component } from "react";
import moment from "moment";

import {
  Button,
  Header,
  Container,
  MessageHeader,
  Segment,
  Comment,
  Icon,
  Input
} from "semantic-ui-react";
import socket from "socket.io-client";
window.socket = socket(
  window.location.origin,
  { path: "/chat/" },
  { transport: ["websocket"] }
);
const socketUrl = "http://localhost:3002";

export default class Chat extends Component {
  state = {
    online: 1,
    input: "",
    messages: [],
    newMessage: true
  };

  componentDidMount() {
    window.socket.on("all-messages", data => {
      console.log(data);
      this.setState({ messages: [...data] });
    });
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  sendMessage = () => {
    let newMessage = {
      author: this.state.login,
      message: this.state.input,
      time: moment().format("LTS")
    };
    window.socket.emit("message", newMessage);
    this.setState(prev => ({
      input: "",
      messages: [...prev.messages, newMessage]
    }));
  };

  render() {
    const { online, messages, input } = this.state;
    return (
      <Container>
        <MessageHeader />
        <Segment>
          <Segment clearing="true">
            <Header fluide="true" as="h2" floated="left">
              <Header.Subheader>Online Users:{online}</Header.Subheader>
            </Header>
          </Segment>
          <Comment.Group className="messages">
            {messages.map(item => (
              <Comment key={item._id}>
                <Comment.Content>
                  <Comment.Author as="a">{item.author}</Comment.Author>
                  <Comment.Metadata>{item.time}</Comment.Metadata>
                  <Comment.Text>{item.message}</Comment.Text>
                </Comment.Content>
              </Comment>
            ))}
          </Comment.Group>
        </Segment>
        <Segment className="messageForm">
          <Input
            fluide
            name="message"
            label={<Button icon="add" />}
            labelPosition="left"
            placeholder="write your message"
            value={input}
            onChange={this.handleChange}
          />
          <Button
            color="olive"
            content="add Reply"
            labelPosition="left"
            icon="edit"
            onClick={this.sendMessage}
          />
        </Segment>
      </Container>
    );
  }
}