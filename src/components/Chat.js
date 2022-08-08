import React from "react";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import BotAvatar from "../../images/bot.jpg"
// import User from "../../public/images/user.png"

function Chat({ text, type, answer }) {
  const isQuestion = type === "question";
  const isBot = isQuestion ? "row" : "row-reverse";
  const BotAvatarSrc = "../../images/bot.jpg";
  const UserSrc = "../../public/images/user.png";
  // const showAnswer = answer? "":answer
  // console.log("在Chat裡answer?",answer)


  return (
    <ListItem className={isBot}>
      {isQuestion ? (
        <Avatar alt="icon" src={BotAvatarSrc} />
      ) : (
        <Avatar alt="icon" src={UserSrc} />
      )}
      <div className="chat-bubble">{text}{answer}</div>

    </ListItem>
  );
}

export default Chat;
