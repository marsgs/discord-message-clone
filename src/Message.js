import React from "react";

const Message = ({ message, deleteMessage }) => {
  const handleDelete = () => {
    deleteMessage(message.id);
  };

  return (
    <div>
      <div className="message">
        <p>{message.text} </p>
        <button onClick={handleDelete}>X</button>
      </div>
    </div>
  );
};

export default Message;
