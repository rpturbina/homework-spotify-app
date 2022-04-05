import { useEffect, useState } from "react";

import TrackList from "../../components/TrackList";
// import Track from "../../components/Track";
// import PlaylistForm from "../../components/PlaylistForm";
import SearchTrack from "../../components/SearchTrack";
import LogIn from "../../components/LogIn";

const Main = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (window.location.hash) {
      getAccessToken(window.location);
    }
  }, []);

  const getAccessToken = (url) => {
    const currentLocation = String(url).split("#")[1];
    const params = new URLSearchParams(currentLocation);
    const EXPIRES_IN = params.get("expires_in");
    setTimeout(() => {
      setAccessToken("");
      alert("Your access token is expired. Please get new access token.");
    }, EXPIRES_IN * 1000);
    const ACCESS_TOKEN = params.get("access_token");
    setAccessToken(ACCESS_TOKEN);
  };

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async (e, accessToken = "") => {
    if (searchInput) {
      e.preventDefault();
      // console.log("Search!");
      try {
        if (!window.location.hash || !accessToken) {
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
          setTracks([]);
          throw new Error("Tracks not found.");
        }
        setTracks(result.tracks.items);
        console.log(result);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  };

  const handleSelectTrack = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
    console.log(track);
    if (index === -1) {
      setSelected([track, ...selected]);
    } else {
      const newSelected = selected.filter((selected) => selected.uri !== track.uri);
      setSelected(newSelected);
    }
  };

  const isSelected = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
    if (index === -1) {
      return false;
    }
    return true;
  };

  return (
    <main className="main">
      <LogIn accessToken />
      {/* <PlaylistForm /> */}
      <SearchTrack
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
        handleSearchSubmit={(e) => handleSearchSubmit(e, accessToken)}
      />
      <TrackList tracks={tracks} handleSelectTrack={handleSelectTrack} isSelected={isSelected} />
      {/* <Track /> */}
    </main>
  );
};

export default Main;
