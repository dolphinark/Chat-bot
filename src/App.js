import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import { display } from "@mui/system";

function App() {
  const [initData, setInitData] = useState(defaultDataset.init);
  const [currentId, setCurrentId] = useState("init");
  const [currentTopic, setCurrentTopic] = useState({
    topic: defaultDataset[currentId].question,
    topicType: "question",
  });
  const [options, setOptions] = useState(initData.answers);
  const [answer, setAnswer] = useState({}); //上方使用者回答的部分
  const [dfault, setDfault] = useState(defaultDataset);

  function selectOption(nextId, selectedOption) {
    //傳入的index是錯誤的 下一輪就還是同樣的內容

    //保存問題
    //使用者顯示選擇的option
    //Bot顯示選擇的option的問題
    //顯示選擇的option的新一輪option

    // addChats();
    console.log("nextId", nextId);   //正確的nextId


    setAnswer({
      text: selectedOption,
      topicType: "answer",
    });

    setOptions(defaultDataset[nextId].answers);


    //等等再處理
    displayNextChat(nextId);
  }

  function displayNextChat(nextTopic) {
    // setCurrentTopic((prevTopic) => {
    //   return {
    //     topic: defaultDataset.nextTopic,
    //     ...prevTopic
    //   };
    // });
   
  }

  function addChats(index) {
    // const chat = {};
    // currentTopic+selectedAns
  }

  return (
    <main>
      <div className="container">
        <Chats
          topic={currentTopic.topic}
          topicType={currentTopic.topicType}
          answer={answer.text}
        />
        <OptionList
          options={options}
          selectOption={selectOption}
          nextId={defaultDataset[currentId].answers}
        />
      </div>
    </main>
  );
}

export default App;
