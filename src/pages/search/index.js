import { useEffect, useState } from "react";
import Button from "../../components/Button";
import TableOfTracks from "../../components/TableOfTracks";

const SearchSong = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [selectCondition, setSelectCondition] = useState({
  //   selectedTracks: [],
  //   isSelected: [],
  // });
  useEffect(() => {
    getAccessToken();
  }, []);

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

  const getAccessToken = () => {
    if (window.location.hash) {
      const currentLocation = String(window.location).split("#")[1];
      const params = new URLSearchParams(currentLocation);
      const EXPIRES_IN = params.get("expires_in");
      setTimeout(() => {
        setAccessToken("");
        alert("Your access token is expired. Please get new access token.");
      }, EXPIRES_IN * 1000);
      const ACCESS_TOKEN = params.get("access_token");
      setAccessToken(ACCESS_TOKEN);
    }
  };

  // const getAccessToken = async () => {
  //   const currentLocation = String(window.location).split("#")[1];
  //   const params = new URLSearchParams(currentLocation);
  //   const ACCESS_TOKEN = params.get("access_token");
  //   setAccessToken(ACCESS_TOKEN);
  //   // return ACCESS_TOKEN;
  // };

  // const getSongs = async (searchInput, accessToken) => {
  //   try {
  //     if (searchInput) {
  //       const fetchOptions = {
  //         method: "GET",
  //         headers: new Headers({
  //           Authorization: `Bearer ${accessToken}`,
  //         }),
  //       };

  //       const LIMIT = 10;
  //       const queryTerm = searchInput;
  //       const api_endpoint = `https://api.spotify.com/v1/search?type=track&q=${queryTerm}&limit=${LIMIT}`;

  //       const result = await fetch(api_endpoint, fetchOptions).then((response) => response.json());
  //       return result;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleSearch = async (event) => {
  //   if (searchInput) {
  //     const tracksResult = await getSongs(searchInput, accessToken);
  //     console.log(tracksResult);
  //     setSearchResult(tracksResult.tracks?.items);
  //     // event.preventDefault();
  //   }
  // };

  // const handleAuth = () => {
  //   console.log("Auth clicked");
  //   if (!accessToken) {
  //     const ACCESS_TOKEN = getAccessToken();
  //     setAccessToken(ACCESS_TOKEN);
  //   }
  // };

  // const handleSelect = (track) => {
  //   const { selectedTracks } = selectCondition;
  //   const index = selectedTracks.findIndex((selected) => selected.uri === track.uri);
  //   if (index === -1) {
  //     selectedTracks.push(track);
  //     // setSelectCondition({ selectedTracks });
  //     // return false;
  //   } else {
  //     selectedTracks.splice(index, 1);
  //     // return true;
  //   }
  //   setSelectCondition({ selectedTracks });
  //   console.log(selectedTracks);
  // };

  // const handleCondition = (id) => {
  //   const { selectedTracks } = selectCondition;
  //   const index = selectedTracks.findIndex((selected) => selected.id === id);
  //   if (index === -1) {
  //     return false;
  //   }
  //   return true;
  // };

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async (event) => {
    if (searchInput) {
      event.preventDefault();
      console.log("Search!");
      try {
        if (!window.location.hash || !accessToken) {
          alert("Get your access token first.");
          throw new Error("Get your access token first.");
        }
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
        if (!result.tracks.items.length) {
          setSearchResult("");
          throw new Error("Tracks not found.");
        }
        setSearchResult(result.tracks.items);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="search-bar">
      <form>
        <label htmlFor="search">Spotify Tracks Search</label>
        <input
          id="search"
          type="text"
          className="input"
          onChange={handleInput}
          value={searchInput}
          required
          placeholder="Enter the keyword for search the tracks"
        />
        <Button type="submit" value="Search" onClick={handleSearch} />
        <a href={url} className="btn">
          {!accessToken ? "Get Access Token" : "Refresh Access Token"}
        </a>
      </form>
      {searchResult ? <TableOfTracks tracks={searchResult} /> : <p>Tracks not found</p>}
    </div>
  );
};

export default SearchSong;
