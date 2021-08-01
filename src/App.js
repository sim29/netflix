import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      {/* App Banner */}
      <Navbar />
      <div className="App__banner">
        <Banner />
      </div>
      <div className="App-Rows">
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={request.fetchNetflixOriginals}
          fullsized
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
