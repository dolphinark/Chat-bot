import React from "react";
import Answer from "./Answer";

function AnswerList({ answer }) {
  return (
    <div className="answer-list">
      {answer.map((answer, index) => (
        <Answer answer={answer.content} key={index.toString()}/>
      ))}
    </div>
  );
}

export default AnswerList;
