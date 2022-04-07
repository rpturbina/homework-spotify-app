import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authToken } from "../../redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      getAccessToken(window.location);
    }
  });

  const getAccessToken = (url) => {
    const currentLocation = String(url).split("#")[1];
    const params = new URLSearchParams(currentLocation);
    const state = params.get("state");
    const storedState = localStorage.getItem("spotify_auth_state");
    const ACCESS_TOKEN = params.get("access_token");
    dispatch(authToken(ACCESS_TOKEN));

    const EXPIRES_IN = params.get("expires_in");
    setTimeout(() => {
      dispatch(authToken(""));
      alert("Your access token is expired. Please log in again.");
    }, EXPIRES_IN * 1000);

    if (ACCESS_TOKEN && (state === null || state !== storedState)) {
      alert("There was an error during the authentication");
    } else {
      localStorage.removeItem("spotify_auth_state");
    }
  };

  const handleLogIn = () => {
    const generateRandomString = (length = 16) => {
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let str = "";
      for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return str;
    };

    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const redirect_uri = "http://localhost:3000/";

    const state = generateRandomString(16);

    localStorage.setItem("spotify_auth_state", state);
    const scope = "playlist-modify-private";

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += `&client_id=${encodeURIComponent(client_id)}`;
    url += `&scope=${encodeURIComponent(scope)}`;
    url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    url += `&state=${encodeURIComponent(state)}`;

    window.location = url;
  };

  return (
    <main className="main">
      <button className="btn btn--access-token" onClick={handleLogIn}>
        Login with Spotify
      </button>
    </main>
  );
};

export default LandingPage;
