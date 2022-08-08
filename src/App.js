import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import { display } from "@mui/system";

function App() {
  const [initData, setInitData] = useState(defaultDataset.init);
  const [currentId, setCurrentId] = useState("init");
  const [options, setOptions] = useState(initData.answers);
  const [answer, setAnswer] = useState({}); //上方使用者回答的部分
  const [chats, setChats] = useState([
    { text: defaultDataset[currentId].question, type: "question" },
  ]);

  
  function selectOption(nextId, selectedOption) {

    addChats({
      text: selectedOption,
      type: "answer",
    });
 
    setOptions(defaultDataset[nextId].answers);

    displayNextQuestion(nextId,defaultDataset[nextId])
  }

  function addChats(chat) {
    setChats((prevChats) => {
      return [...prevChats, chat];
    });
  }

  function displayNextQuestion(nextId, nextDataset) {
  
    addChats({
      text: nextDataset.question,
      type: "question",
    });
  }


  return (
    <main>
      <div className="container">
        <Chats chats={chats} />
        {console.log("chats", chats)}
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
