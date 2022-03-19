import axios from "axios";

const ENDPOINT =
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json";

const SPOTIFY_API_KEY = process.env.REACT_APP_SPOTIFY_KEY;

console.log(SPOTIFY_API_KEY);

const getData = async () => {
  try {
    // * Using Fetch API
    // const response = await fetch(ENDPOINT);
    // if (!response.ok) {
    //   throw new Error(`HTTP error: ${response.status}`);
    // }
    // const jsonData = await response.json();

    // * Using Axios
    const response = await axios.get(ENDPOINT, {});
    if (response.status !== 200) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const jsonData = response.data;

    console.log(jsonData);
    return jsonData;
  } catch (error) {
    alert(error);
  }
};

getData();

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
