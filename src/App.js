import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      {/* App Banner */}
      <div className="App__banner">
        <Banner />
      </div>
      <div className="App-Rows">
        <Row
          title="NETFLIX ORIGINALS"
          fetchURL={request.fetchNetflixOriginals}
          fullsized
        />
        <Row title="Trending" fetchURL={request.fetchTrending} />
        <Row title="Top Rated Movies" fetchURL={request.fetchTopRated} />
        <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
        <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
        <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default App;
