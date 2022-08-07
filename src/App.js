import React, { useState } from "react";
import AnswerList from "./components/AnswerList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import { display } from "@mui/system";

function App() {
  const [initData, setInitData] = useState(defaultDataset.init);
  const [currentTopic, setCurrentTopic] = useState({
    topic: defaultDataset.init.question,
    topicType: "question",
  });
  const [chats, setChats] = useState(initData);

  function selectAnswer(index) {
    addChats();
    console.log("選項", initData.answers[index].nextId);
  }

  function addChats(index) {
    const chat = {};
    //
    setChats((prevChats) => {         //保存原本的加顯示下一輪的問題跟選項
      return { ...prevChats, chat };
    });
   
  }

  return (
    <main>
      <div className="container">
        <Chats topic={currentTopic.topic} topicType={currentTopic.topicType} />
        <AnswerList answer={initData.answers} selectAnswer={selectAnswer} />
      </div>
    </main>
  );
}

export default App;
