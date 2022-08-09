import React from "react";
import Chat from "./Chat";
import List from "@mui/material/List";
import { StyledEngineProvider } from "@mui/material/styles";

function Chats({ chats }) {
  return (
    <StyledEngineProvider injectFirst>
      <List>
        {chats.map((chat, index) => (
          <Chat text={chats[index].text} type={chats[index].type} key={index} />
        ))}
      </List>
    </StyledEngineProvider>
  );
}

export default Chats;
