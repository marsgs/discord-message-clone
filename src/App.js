import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import MessageList from "./MessageList.js";

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([message, ...messages]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };
  return (
    <div className="App">
      <MessageList messages={messages} deleteMessage={deleteMessage} />
      <Form addMessage={addMessage} />
    </div>
  );
}

export default App;
