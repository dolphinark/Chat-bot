import React from "react";
import Button from '@mui/material/Button';


function Answer({answer}) {
  return (
      <Button variant="contained" className="answer">{answer}</Button>
  );
}

export default Answer;
