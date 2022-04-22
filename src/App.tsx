import CreatePlaylist from "./pages/CreatePlaylist";
import LandingPage from "./pages/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
/**
 * TODO: Homework-Module-6-Session-1
 * * Write a test for Tracks component. Verify all components are rendered correctly.
 * * (Bonus) Write a test for Search API function. Use the mock server, and fire the request to the mock server instead.
 */

const App = () => {
  const isLoggedIn = useSelector((state: RootState) => state.accessToken);

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
