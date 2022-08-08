import React from "react";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";

function Chat({ chats, text, type }) {
  const isQuestion = type === "question";
  const isBot = isQuestion ? "row" : "row-reverse";
  const BotAvatarSrc = "../../images/bot.jpg";
  const UserSrc = "../../public/images/user.png";
 
  return (
    <ListItem className={isBot}>
      {isQuestion ? (
        <Avatar alt="icon" src={BotAvatarSrc} />
      ) : (
        <Avatar alt="icon" src={UserSrc} />
      )}
      <div className="chat-bubble">{text}</div>

    </ListItem>
  );
}

export default Chat;
