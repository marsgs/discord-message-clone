import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import "./Form.scss";

const Form = ({ addMessage }) => {
  const [message, setMessage] = useState({
    id: "",
    text: "",
    edit: false,
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.text.trim()) {
      addMessage({ ...message, id: uuid() });
      setMessage({ ...message, text: "" });
      console.log(message);
    }
  };

  return (
    <div>
      <form>
        <TextareaAutosize
          className="text-input"
          onChange={handleChange}
          value={message.text}
          name="text"
          type="text"
        />
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
