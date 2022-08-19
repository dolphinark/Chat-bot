import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import FormDialog from "./components/Form/FormDialog";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  // const initData = defaultDataset.init;  //local
  const [dataset, setDataset] = useState({}); //firebase
  const currentId = "init";
  // const [options, setOptions] = useState(initData.answers); //local
  const [options, setOptions] = useState([]); //firebase
  const [chats, setChats] = useState([
    { text: defaultDataset[currentId].question, type: "question" },
  ]);
  const [openInquiry, setOpenInquiry] = React.useState(false);

  function selectOption(nextId, selectedOption) {
    switch (true) {
      case /^https:*/.test(nextId):
        const a = document.createElement("a");
        a.href = nextId;
        a.target = "_blank";
        a.rel = "noreferrer noopenner"; //for safety
        a.click();
        break;

      case nextId === "contact":
        handleClickOpenInquiry();
        break;

      default:
        addChats({
          text: selectedOption,
          type: "answer",
        });

        setOptions(defaultDataset[nextId].answers);
        // setTimeout(
        //   () => displayNextQuestion(nextId, defaultDataset[nextId]),
        //   750
        // );   //local
        setTimeout(() => displayNextQuestion(nextId, dataset[nextId]), 750); //firebase
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

  const handleClickOpenInquiry = () => {
    setOpenInquiry(true);
  };

  const handleCloseInquiry = () => {
    setOpenInquiry(false);
  };

  useEffect(() => {
    (async () => {
      const initDataset = {} //*
      const citiesCol = collection(db, "questions");
      const citySnapshot = await getDocs(citiesCol);
      citySnapshot.forEach((doc) => {
        const id = doc.id;
        const data = doc.data();
        initDataset[id] = data;  //*
      });
      setDataset(initDataset)
      setOptions(initDataset[currentId].answers)
    })();
  }, []);


  return (
    <main>
      <div className="container">
        <Chats chats={chats} />
        <OptionList
          options={options}
          selectOption={selectOption}
          nextId={defaultDataset[currentId].answers}
        />
        <FormDialog
          openInquiry={openInquiry}
          handleClickOpenInquiry={handleClickOpenInquiry}
          handleCloseInquiry={handleCloseInquiry}
        />
      </div>
    </main>
  );
}

export default App;
