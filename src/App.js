// import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

/**
 * TODO: Homework-Module-4-Session-2
 * * Move the create playlist page URL to /create-playlist
 * * The Create Playlist page only accessible when user already login. If user haven't logged in, redirect to root URL (/)
 * * For the root URL (/)
 * * * If user haven't logged in, show the Login link
 * * * If user already logged in,redirect to Create Playlist page
 */

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
