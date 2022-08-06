import React from "react";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import BotAvatar from "../../images/bot.jpg"
// import User from "../../public/images/user.png"

function Chat({ topic, topicType }) {
  const isQuestion = topicType === "question";
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
      <div className="chat-bubble">say sth</div>
    </ListItem>
  );
}

export default Chat;
