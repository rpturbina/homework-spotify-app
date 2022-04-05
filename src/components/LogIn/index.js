const LogIn = (props) => {
  const { accessToken } = props;

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
  const scope = "playlist-modify-private";

  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += `&client_id=${encodeURIComponent(client_id)}`;
  url += `&scope=${encodeURIComponent(scope)}`;
  url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  url += `&state=${encodeURIComponent(state)}`;
  return !accessToken ? (
    <a href={url} className="btn btn--access-token" disabled>
      Login with Spotify
    </a>
  ) : (
    <button className="btn btn--access-token" disabled>
      Logged In
    </button>
    // (
    //   <a href={!accessToken ? url : "#"} className="btn btn--access-token">
    //     {!accessToken ? "Login with Spotify" : "Logged In"}
    //   </a>
    // );
  );
};

export default LogIn;
