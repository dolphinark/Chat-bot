import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import { create } from "@mui/material/styles/createTransitions";
// import { display } from "@mui/system";

function App() {
  const initData = defaultDataset.init;
  const currentId = "init";
  const [options, setOptions] = useState(initData.answers);
  const [chats, setChats] = useState([
    { text: defaultDataset[currentId].question, type: "question" },
  ]);

  function selectOption(nextId, selectedOption) {
    switch (true) {
      case /^https:*/.test(nextId):
        const a = document.createElement("a");
        a.href = nextId;
        a.target = "_blank";
        a.rel = "noreferrer noopenner"; //for safety
        a.click();
        break;

      default:
        addChats({
          text: selectedOption,
          type: "answer",
        });

        setOptions(defaultDataset[nextId].answers);
        setTimeout(
          () => displayNextQuestion(nextId, defaultDataset[nextId]),
          750
        );
    }
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
