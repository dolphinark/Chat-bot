import React from "react";
import Answer from "./Answer";

function AnswerList({ answer, selectAnswer }) {
  return (
    <div className="answer-list">
      {answer.map((answer, index) => (
        <Answer
          answer={answer.content}
          key={index.toString()}
          selectAnswer={selectAnswer}
          index={index}
        />
      ))}
    </div>
  );
}

export default AnswerList;
