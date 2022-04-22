import CreatePlaylist from "./pages/CreatePlaylist";
import LandingPage from "./pages/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
/**
 * TODO: Homework-Module-5-Session-3
 * * Add typescript to your app
 * * Convert the Tracks component and Search API calls to Typescript. Don't use typescript types any for this, instead write your own definitions.
 */

const App = () => {
  const isLoggedIn = useSelector((state) => state.accessToken);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/create-playlist">
          {isLoggedIn ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/create-playlist" /> : <LandingPage />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
