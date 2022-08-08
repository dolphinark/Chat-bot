import React from "react";
import Button from "@mui/material/Button";

function Option({selectedOption, selectOption, nextId }) {
  return (
    <Button
      variant="contained"
      className="answer"
      onClick={() => {
        selectOption(nextId, selectedOption);
      }}
    >
      {selectedOption}
    </Button>
  );
}

export default Option;
