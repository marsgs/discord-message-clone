import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Form.js";
import MessageList from "./MessageList.js";

const LOCAL_STORAGE_KEY = "react-messages";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storageMessages = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageMessages) {
      setMessages(storageMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="messages">
          <MessageList messages={messages} deleteMessage={deleteMessage} />
        </div>

        <Form addMessage={addMessage} />
        {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
      </div>
    </div>
  );
}

export default App;
