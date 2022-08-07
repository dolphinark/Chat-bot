import React from "react";
import Option from "./Option";

function OptionList({ options, selectOption }) {
  return (
    <div className="answer-list">
      {options.map((option, index) => (
        <Option
          option={option.content}
          key={index.toString()}
          selectOption={selectOption}
          index={index}
        />
      ))}
    </div>
  );
}

export default OptionList;
