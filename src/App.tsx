import React from "react";
import DayWebtoon from "./components/DayWebtoon";
import BestWebtoon from "./components/BestWebtoon";
import "./App.css";
import WebtoonNav from "./components/WebtoonNav";
import HotWeebtoon from "./components/HotWebtoon";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <WebtoonNav />

      <div className="Content_wrap">
        <div className="Leftbox">
          <DayWebtoon />
        </div>
        <div>
          <HotWeebtoon />
        </div>
        <div className="Rightbox">
          <BestWebtoon />
        </div>
      </div>
    </div>
  );
}

export default App;
