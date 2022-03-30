// import data from "./data/index";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

/**
 * TODO: Homework-Module-3-Session-1
 * * Have a link that when clicked, it redirects to Spotify Auth API.
 * * * Read it more [here]() in the **Implicit Grand Flow** section
 * * * For the scope, use playlist-modify-private
 * * * Set up the callback URL as localhost:3000 in the Spotify Dashboard
 * * * The callback will contains the Access Token, which you'll need for next request. Store that in a state

* * Create a search song functionalities
  * * Have a Search textbox button, when the button is clicked, it calls [Spotify Search API](). Later on, show the results on the Tracks Table created before.
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
