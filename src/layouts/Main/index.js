import CreatePlaylist from "../../pages/CreatePlaylist";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import { useState } from "react";

const Main = () => {
  // const isLoggedIn = true;
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => setLoggedIn(true);

  const handleLogout = () => setLoggedIn(false);
  return (
    <>
      {/* <Link to="/create-playlist">Create Playlist</Link> */}
      {/* <Switch>
        <Route exact path="/">
          <Link to="/create-playlist">Create Playlist</Link>
          <h2>Login Page</h2>
          {loggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </Route>
        <Route path="/create-playlist">
          {loggedIn ? (
            <>
              <h2>Create Playlist Page</h2>
              <CreatePlaylist />
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch> */}
      <CreatePlaylist />
    </>
  );

  // return <CreatePlaylist />;
};

export default Main;
