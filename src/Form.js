import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ addMessage }) => {
  const [message, setMessage] = useState({
    id: "",
    text: "",
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value.trim() });
    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({ ...message, id: uuid() });
    setMessage({ ...message, text: "" });
    console.log(message);
  };

  return (
    <div>
      <form>
        <input
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
