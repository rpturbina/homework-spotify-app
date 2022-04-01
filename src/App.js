import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

/**
 * TODO: Homework-Module-3-Session-2
 * * Add feature to select and deselect songs
 * * * Use the uri as the key identifier for looping
 * * * Build this feature using Hooks
 * * * When a song is selected, the button label should be 'Deselect'. When the song isn't selected, the button label should be 'Select'.
 * * * When user searches for another song, the selected songs should still be maintained in the list
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
