import React from "react";
import Button from '@mui/material/Button';


function Answer({answer}) {
  return (
    <div className="answer">
      <Button variant="contained">{answer}</Button>
    </div>
  );
}

export default Answer;
