import React from "react";
import Chat from "./Chat";
import List from "@mui/material/List";

function Chats({ chats }) {
  return (
    <List>
      {chats.map((chat, index) => (
        <Chat text={chats[index].text} type={chats[index].type} key={index} />
      ))}
    </List>
  );
}

export default Chats;
