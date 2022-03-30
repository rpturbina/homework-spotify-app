import { useState } from "react";
import TableOfTracks from "../../components/TableOfTracks";

const SearchSong = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const generateRandomString = (length = 16) => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  };

  const getAccessToken = async () => {
    const currentLocation = String(window.location).split("#")[1];
    const params = new URLSearchParams(currentLocation);
    const ACCESS_TOKEN = params.get("access_token");
    setAccessToken(ACCESS_TOKEN);
  };

  const getSongs = async () => {
    try {
      getAccessToken();
      const fetchOptions = {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
      };

      const LIMIT = 10;
      const queryTerm = searchInput;
      const api_endpoint = `https://api.spotify.com/v1/search?type=track&q=${queryTerm}&limit=${LIMIT}`;

      const result = await fetch(api_endpoint, fetchOptions).then((response) => response.json());
      setSearchResult(result.tracks.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => setSearchInput(event.target.value);

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

  return (
    <div className="search-bar">
      <input type="text" onChange={handleInput} value={searchInput} className="input" required />
      <button type="submit" onClick={getSongs} className="btn btn--select">
        Search
      </button>
      <a href={url} className="btn">
        {accessToken === "" ? "Login" : "Logout"}
      </a>
      <TableOfTracks tracks={searchResult} />
    </div>
  );
};

export default SearchSong;
