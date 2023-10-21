import React from "react";
import DayWebtoon from "./components/DayWebtoon";
import BestWebtoon from "./components/BestWebtoon";
import "./App.css";
import { MainText } from "./styles/TextStyle";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="container">
        <div className="Content_wrap">
          <div className="Leftbox">
            <MainText>
              우헹헹님, 이 웹툰들 최신 이야기를 놓치고 계신 것 같아요!
            </MainText>
            <DayWebtoon />
          </div>
          <div className="Rightbox">
            <BestWebtoon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
