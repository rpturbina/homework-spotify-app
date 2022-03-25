// import data from "./data/index";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

/**
 * TODO: Homework-Module-2-Session-3
 * * Now, we will create a table of tracks :
 * * * Download the data [here](https://gist.githubusercontent.com/aryapradipta9/4085f18a47101f10f685a6140385b2bf/raw/e32426bc2d954274e984b03c601f14c08eb47a0b/all-sample.js). This contains array of tracks.
 * * * Loop the data and create track components for each track listed.
 */

function App() {
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
