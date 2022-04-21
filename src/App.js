import CreatePlaylist from "./pages/CreatePlaylist";
import LandingPage from "./pages/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
/**
 * TODO: Homework-Module-5-Session-2
 * * Start using UI component library/just using CSS. You're free to choose any library/just using CSS.
 * * You can freely choose which components that will be changed
 * * Example: modify search input to material-ui
 */

const App = () => {
  const currentAccessToken = useSelector((state) => state.accessToken);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/create-playlist">
          {currentAccessToken ? <CreatePlaylist /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {currentAccessToken ? <Redirect to="/create-playlist" /> : <LandingPage />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
