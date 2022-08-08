import React, { useEffect, useState } from "react";
import OptionList from "./components/OptionList";
import defaultDataset from "./dataset";
import Chats from "./components/Chats";
import { display } from "@mui/system";

function App() {
  const [initData, setInitData] = useState(defaultDataset.init);
  const [currentId, setCurrentId] = useState("init");
  const [currentTopic, setCurrentTopic] = useState({
    text: defaultDataset[currentId].question,
    type: "question",
  });
  const [options, setOptions] = useState(initData.answers);
  const [answer, setAnswer] = useState({}); //上方使用者回答的部分
  const [chats, setChats] = useState([{currentTopic,answer}])


  function selectOption(nextId, selectedOption) {

    //保存問題
    //使用者顯示選擇的option
    //Bot顯示選擇的option的問題
    //顯示選擇的option的新一輪option
    
    // addChats();
    console.log("nextId", nextId);   //正確的nextId


    setAnswer({
      text: selectedOption,
      type: "answer",
    });

    setOptions(defaultDataset[nextId].answers);


    //等等再處理
    displayNextChat(nextId);
  }

  function addChats(chat) {
        setChats((prevChats) =>{
          return [...prevChats,chat]
        } )
  }

  function displayNextChat(nextTopic) {
    // setCurrentTopic((prevTopic) => {
    //   return {
    //     topic: defaultDataset.nextTopic,
    //     ...prevTopic
    //   };
    // });
  }


  function displayNextQuestion(nextId, nextDataset){
    addChats({
      text: nextDataset.question,
      type: 'question'
  });
   // 次の回答一覧をセット
   setOptions(nextDataset.answers)

   // 現在の質問IDをセット
   setCurrentId(nextId)

  }

//    // 次の質問をチャットエリアに表示する関数
//    const displayNextQuestion = (nextQuestionId, nextDataset) => {
//     // 選択された回答と次の質問をチャットに追加
//     addChats({
//         text: nextDataset.question,
//         type: 'question'
//     });

//     // 次の回答一覧をセット
//     setAnswers(nextDataset.answers)

//     // 現在の質問IDをセット
//     setCurrentId(nextQuestionId)
// }


  return (
    <main>
      <div className="container">
        <Chats
          text={currentTopic.text}
          type={currentTopic.type}
          answer={answer.text}
          chats={chats}
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
