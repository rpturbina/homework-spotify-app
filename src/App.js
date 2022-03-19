const ENDPOINT =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;

const getResponse = async () => {
  try {
    const response = await fetch(ENDPOINT);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getResponse();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
