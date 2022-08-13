import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [infoText, showInfoText] = useState();
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button
          className="btn"
          onClick={() => {
            showInfoText(!infoText);
          }}
        >
          {infoText ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {infoText && <p>{info}</p>}
    </article>
  );
};

export default Question;
