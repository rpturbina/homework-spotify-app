import data from "./data/index";

/**
 * TODO: Homework-Module-2-Session-2
 * * Create a page in React which contains the following data.
 * * The layout will be similiar to previous exercise, wihtout the form part only.
//  * * Images of the Album
//  * * Song title
//  * * Song Artist
//  * * A button that says (Select)
 *
 * * Create all of them in App.js in one component
 * * Download the data here and put that in your react app
 */

function App() {
  const {
    album: {
      images: [{ url: albumImgUrl }],
      name: albumName,
    },
    artists: [{ name: artistName }],
    name: songTitle,
  } = data;
  console.log(data);

  const myGithub = "https://github.com/rpturbina";

  return (
    <div className="App">
      <main className="main">
        <section className="album-container">
          <img src={albumImgUrl} alt={albumName} className="album-image" />
          <div className="song-info">
            <h1 className="song-title">{songTitle}</h1>
            <h2 className="song-artist">{artistName}</h2>
            <button type="button" className="btn btn--select">
              Select
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>
          Made with 🤍 by{" "}
          <a href={myGithub} rel="noopener noreferrer" target="_blank">
            rpturbina
          </a>{" "}
          ©2022
        </p>
      </footer>
    </div>
  );
}

export default App;
