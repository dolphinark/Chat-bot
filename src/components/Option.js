import React from "react";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/material/styles";

function Option({ selectedOption, selectOption, nextId }) {
  return (
    <StyledEngineProvider injectFirst>
      <Button
        hover
        variant="contained"
        className="answer"
        onClick={() => {
          selectOption(nextId, selectedOption);
        }}
      >
        {selectedOption}
      </Button>
    </StyledEngineProvider>
  );
}

export default Option;
