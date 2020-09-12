import React from "react";
import Message from "./Message.js";
import Form from "./Form.js";

const MessageList = ({ messages, deleteMessage }) => (
  <div>
    {messages.map((message) => {
      if (message.edit) {
        return <Form />;
      } else {
        return (
          <Message
            key={message.id}
            message={message}
            deleteMessage={deleteMessage}
          />
        );
      }
    })}
  </div>
);

export default MessageList;
