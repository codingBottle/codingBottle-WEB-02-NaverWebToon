import DayWebtoon from "./components/DayWebtoon";
import BestWebtoon from "./components/BestWebtoon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <h1>dsaf</h1>
      <div className="Content_wrap">
        <div className="Leftbox">
          <DayWebtoon />
        </div>
        <div className="Rightbox">
          <BestWebtoon />
        </div>
      </div>
    </div>
  );
}

export default App;
