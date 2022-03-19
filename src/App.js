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
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Playlist successfully created.");
  };

  return (
    <div className="App">
      <main className="main">
        <div className="wrapper">
          <section className="playlist-form">
            <h1 className="heading">Create Playlist</h1>
            <form id="form" className="form" onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label htmlFor="title" className="form__label">
                    Title
                  </label>
                  <input
                    required
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Add a title"
                    className="form__input"
                  />
                </li>
                <li>
                  <label htmlFor="description" className="form__label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Add an optional description"
                    className="form__textarea"
                  ></textarea>
                </li>
              </ul>
              <input type="submit" value="Save" className="btn btn--save" />
            </form>
          </section>
          <section className="music-list">
            <div className="music-box">
              <img
                className="album-picture"
                src="https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e"
                alt="Manusia"
              />
              <h2 className="song-title">Hati-Hati di Jalan</h2>
              <h3 className="song-artist">Tulus</h3>
              <h4 className="song-album">Manusia</h4>
              <button className="btn btn--play">Play</button>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <p>Made with 🤍 by rpturbina © 2022</p>
      </footer>
    </div>
  );
}

export default App;
