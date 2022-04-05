import Track from "../Track";
// import data from "../../data/AllSample";

// import { useState, useEffect } from "react";

const TrackList = (props) => {
  const { tracks, handleSelectTrack, isSelected } = props;
  // const [searchInput, setSearchInput] = useState("");
  // const [accessToken, setAccessToken] = useState(null);
  // const [tracks, setTracks] = useState([]);
  // const [selected, setSelected] = useState([]);

  // useEffect(() => {
  //   if (window.location.hash) {
  //     getAccessToken();
  //   }
  // }, []);

  // const handleSearchChange = (e) => setSearchInput(e.target.value);

  // const handleTrackSelect = (track) => {
  //   const index = selected.findIndex((selected) => selected.uri === track.uri);
  //   console.log(track);
  //   if (index === -1) {
  //     setSelected([track, ...selected]);
  //   } else {
  //     const newSelected = selected.filter((selected) => selected.uri !== track.uri);
  //     setSelected(newSelected);
  //   }
  // };

  // const isSelected = (track) => {
  //   const index = selected.findIndex((selected) => selected.uri === track.uri);
  //   if (index === -1) {
  //     return false;
  //   }
  //   return true;
  // };

  // const handleSearchSubmit = async (e) => {
  //   if (searchInput) {
  //     e.preventDefault();
  //     console.log("Search!");
  //     try {
  //       if (!window.location.hash || !accessToken) {
  //         alert("Get your access token first.");
  //         throw new Error("Get your access token first.");
  //       }
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
  //       if (!result.tracks.items.length) {
  //         setTracks([]);
  //         throw new Error("Tracks not found.");
  //       }
  //       setTracks(result.tracks.items);
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };

  // const getAccessToken = () => {
  //   const currentLocation = String(window.location).split("#")[1];
  //   const params = new URLSearchParams(currentLocation);
  //   const EXPIRES_IN = params.get("expires_in");
  //   setTimeout(() => {
  //     setAccessToken("");
  //     alert("Your access token is expired. Please get new access token.");
  //   }, EXPIRES_IN * 1000);
  //   const ACCESS_TOKEN = params.get("access_token");
  //   setAccessToken(ACCESS_TOKEN);
  // };

  // const generateRandomString = (length = 16) => {
  //   let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let str = "";
  //   for (let i = 0; i < length; i++) {
  //     str += chars.charAt(Math.floor(Math.random() * chars.length));
  //   }
  //   return str;
  // };

  // const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  // const redirect_uri = "http://localhost:3000/";
  // const state = generateRandomString(16);
  // const scope = "playlist-modify-private";

  // let url = "https://accounts.spotify.com/authorize";
  // url += "?response_type=token";
  // url += `&client_id=${encodeURIComponent(client_id)}`;
  // url += `&scope=${encodeURIComponent(scope)}`;
  // url += `&redirect_uri=${encodeURIComponent(redirect_uri)}`;
  // url += `&state=${encodeURIComponent(state)}`;

  return (
    <div className="track-list">
      {/* <form className="search-bar" onSubmit={handleSearchSubmit}>
        <label htmlFor="keyword" className="search-label">
          Spotify Track Search
        </label>
        <input
          id="keyword"
          name="keyword"
          type="text"
          className="input"
          onChange={handleSearchChange}
          value={searchInput}
          placeholder="Enter the keyword for search the tracks"
          required
        />
        <button type="submit" className="btn btn--search">
          Search
        </button>
        <a href={url} className="btn btn--access-token">
          {!accessToken ? "Get Access Token" : "Refresh Access Token"}
        </a>
      </form> */}
      {tracks.map((track) => {
        const newTrack = {
          ...track,
          isSelect: isSelected(track),
        };
        const {
          album: {
            images: [{ url }],
            name,
          },
          artists: [{ name: artist }],
          name: title,
          uri,
          isSelect,
        } = newTrack;
        return (
          <Track
            key={uri}
            imageUrl={url}
            albumName={name}
            songTitle={title}
            songArtist={artist}
            onSelect={() => handleSelectTrack(track)}
            selectState={isSelect}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
