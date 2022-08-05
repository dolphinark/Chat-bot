import React, { useState } from "react";
import AnswerList from "./components/AnswerList";
import defaultDataset from "./dataset"

function App() {
  const [data, setData] = useState(defaultDataset)
  const [init, setInit] = useState(defaultDataset.init)

  return (
    <main>
      <div className="container">
        <AnswerList answer={init.answers}/>
      </div>
    </main>
  );
}

export default App;
