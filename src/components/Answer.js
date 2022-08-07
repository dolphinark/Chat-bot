import React from "react";
import Button from "@mui/material/Button";

function Answer({ answer, selectAnswer, index }) {
  return (
    <Button
      variant="contained"
      className="answer"
      onClick={() => {
        selectAnswer(index);
      }}
    >
      {answer}
    </Button>
  );
}

export default Answer;
