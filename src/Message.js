import React from "react";
import "./message.scss";
import Delete from "./delete.svg";
import Edit from "./edit.svg";
import DeleteIcon from "@material-ui/icons/Delete";

const Message = ({ message, deleteMessage }) => {
  const handleDelete = () => {
    deleteMessage(message.id);
  };

  const handleEdit = () => {
    message.edit = !message.edit;
    console.log(message);
  };

  return (
    <div>
      <div className="text">
        <p>{message.text}</p>
        <div className="buttons">
          <button onClick={handleEdit}>
            <img className="icon" src={Edit} />
          </button>
          <button onClick={handleDelete}>
            <img className="icon" src={Delete} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
