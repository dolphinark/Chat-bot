import React, { useState } from "react";
import OptionList from "./components/OptionList";
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
  const [selectedAnswer, setSelectedAnswer] = useState("")


  function selectOption(index) {
    addChats();
    console.log("選項", initData.answers[index].nextId);


  }

  function addChats(index) {
    const chat = {};
    
    //顯示選擇項目
    //顯示該項目的物件(新問題跟選擇)
    // setChats((prevChats) => {         保存原本的加顯示下一輪的問題跟選項
    //   return { ...prevChats, chat };
    // });
   
  }

  return (
    <main>
      <div className="container">
        <Chats topic={currentTopic.topic} topicType={currentTopic.topicType} />
        <OptionList options={initData.answers} selectOption={selectOption}/>
      </div>
    </main>
  );
}

export default App;
