import "./App.css";
import Row from "./Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <h1>Netflix clone 📺</h1>
      <div className="App-Rows">
        <Row title="Latest" fetchURL={request.Latest} />
        <Row title="Trending" fetchURL={request.Popular} />
      </div>
    </div>
  );
}

export default App;
