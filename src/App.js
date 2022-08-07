import React, { useState } from "react";
import AnswerList from "./components/AnswerList";
import defaultDataset from "./dataset"
import Chats from "./components/Chats";

function App() {
  const [initData, setInitData] = useState(defaultDataset.init)
  const [currentTopic, setCurrentTopic] = useState({
    topic:defaultDataset.init.question,
    topicType:"question"
  })

  return (
    <main>
      <div className="container">
        <Chats topic={currentTopic.topic} topicType={currentTopic.topicType}/>
        <AnswerList answer={initData.answers}/>
      </div>
    </main>
  );
}

export default App;
