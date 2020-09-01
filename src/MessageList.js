import React from "react";
import Message from "./Message.js";

const MessageList = ({ messages, deleteMessage }) => (
  <div>
    {messages.map((message) => (
      <Message
        key={message.id}
        message={message}
        deleteMessage={deleteMessage}
      />
    ))}
  </div>
);

export default MessageList;
