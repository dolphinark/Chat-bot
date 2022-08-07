import React from "react";
import Chat from "./Chat";
import List from "@mui/material/List";

function Chats({topic,topicType}) {
  return (
    <List>
      <Chat topic={topic} topicType={topicType}/>
    </List>
  );
}

export default Chats;
