import React from "react";
import Chat from "./Chat";
import List from "@mui/material/List";

function Chats({topic,topicType,answer}) {
  return (
    <List>
      <Chat topic={topic} topicType={topicType}/>
      {answer?<Chat answer={answer}/>:""}
    </List>
  );
}

export default Chats;