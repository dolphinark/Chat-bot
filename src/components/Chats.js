import React from "react";
import Chat from "./Chat";
import List from "@mui/material/List";

function Chats({ text, type, answer, chats }) {
  return (
    <List>
      <Chat text={text} type={type}/>
      {answer?<Chat answer={answer}/>:""}
      {/* {chats.map((chat, index) => (
        <div>
          <Chat text={text} type={type} />
          {answer ? <Chat answer={answer} /> : ""}
        </div>
      ))} */}
    </List>
  );
}

export default Chats;
