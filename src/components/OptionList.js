import React from "react";
import Option from "./Option";

function OptionList({ options, selectOption, nextId }) {
  return (
    <div className="answer-list">
      {options.map((option, index) => (
        <Option
          selectedOption={option.content}  //看了這個後
          key={index.toString()}
          selectOption={selectOption}
          index={index} 
          nextId={option.nextId}  //才發現這裡可以這樣設
        />
      ))}
    </div>
  );
}

export default OptionList;
