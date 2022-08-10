import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
// import { display } from "@mui/system";

function App() {
  const initData = defaultDataset.init;
  const currentId = "init";
  const [options, setOptions] = useState(initData.answers);
  const [chats, setChats] = useState([
    { text: defaultDataset[currentId].question, type: "question" },
  ]);

  function selectOption(nextId, selectedOption) {
    addChats({
      text: selectedOption,
      type: "answer",
    });

    setOptions(defaultDataset[nextId].answers);

    displayNextQuestion(nextId, defaultDataset[nextId]);
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

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

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
