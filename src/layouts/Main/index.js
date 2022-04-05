import { useEffect, useState } from "react";

import LogIn from "../../components/LogIn";
import PlaylistForm from "../../components/PlaylistForm";
import SearchTrack from "../../components/SearchTrack";
import TrackList from "../../components/TrackList";

const Main = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
    tracks: selected,
  });
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    if (window.location.hash) {
      getAccessToken(window.location);
      console.log("Use Effect 1");
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      getUserProfile(accessToken);
      console.log("Use Effect 2");
    }
  }, [accessToken]);

  const getUserProfile = async (accessToken) => {
    try {
      const user = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
      }).then((response) => response.json());
      setUserProfile(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const getAccessToken = (url) => {
    const currentLocation = String(url).split("#")[1];
    const params = new URLSearchParams(currentLocation);
    const state = params.get("state");
    const storedState = localStorage.getItem("spotify_auth_state");
    const ACCESS_TOKEN = params.get("access_token");
    setAccessToken(ACCESS_TOKEN);

    const EXPIRES_IN = params.get("expires_in");
    setTimeout(() => {
      setAccessToken("");
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

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async (e, accessToken = "") => {
    if (searchInput) {
      e.preventDefault();
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
      setPlaylist({ ...playlist, tracks: [track, ...selected] });
    } else {
      const newSelected = selected.filter((selected) => selected.uri !== track.uri);
      setSelected(newSelected);
      setPlaylist({ ...playlist, tracks: [newSelected] });
    }
  };

  const isSelected = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
    if (index === -1) {
      return false;
    }
    return true;
  };

  const handlePlaylistChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const handlePlaylistSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <main className="main">
      <LogIn accessToken={accessToken} userProfile={userProfile} handleLogIn={handleLogIn} />
      <PlaylistForm
        handlePlaylistChange={handlePlaylistChange}
        playlist={playlist}
        handlePlaylistSubmit={handlePlaylistSubmit}
      />
      <SearchTrack
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
        handleSearchSubmit={(e) => handleSearchSubmit(e, accessToken)}
      />
      <TrackList tracks={tracks} handleSelectTrack={handleSelectTrack} isSelected={isSelected} />
    </main>
  );
};

export default Main;
