import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PlaylistForm from "../../components/PlaylistForm";
import SearchTrack from "../../components/SearchBar";
import TrackList from "../../components/TrackList";

const CreatePlaylist = () => {
  const [searchInput, setSearchInput] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selected, setSelected] = useState([]);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
    tracks: selected,
  });
  const [userProfile, setUserProfile] = useState(null);
  const currentAccessToken = useSelector((state) => state.accessToken);

  useEffect(() => {
    if (currentAccessToken) {
      getUserProfile(currentAccessToken);
    }
  }, [currentAccessToken]);

  const getUserProfile = async (accessToken) => {
    try {
      const user = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${accessToken}`,
        }),
      }).then((response) => response.json());
      const { display_name, id } = user;
      setUserProfile({ display_name, id });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const postCreatePlaylist = async () => {
    try {
      const { id: user_id } = userProfile;
      const data = {
        name: playlist.title,
        description: playlist.description,
        public: false,
        collaborative: false,
      };
      const response = await fetch(`https://api.spotify.com/v1/users/${user_id}/playlists`, {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${currentAccessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
        body: JSON.stringify(data),
      }).then((response) => response.json());
      return response;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const postItemsToPlaylist = async () => {
    try {
      const { id: playlist_id } = await postCreatePlaylist();
      const data = {
        uris: selected.map((track) => track.uri),
      };
      const response = await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${currentAccessToken}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(data),
        position: 0,
      }).then((response) => response.json());
      console.log(response);

      if (response.hasOwnProperty("snapshot_id")) {
        alert("Playlist successfully created.");
      }

      if (response.error) {
        alert(response.error.message);
      }

      return response;
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async (e, accessToken = "") => {
    if (searchInput) {
      e.preventDefault();
      try {
        if (!accessToken) {
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
      } catch (error) {
        console.error(error);
        alert(error);
      }
    }
  };

  const handleSelectTrack = (track) => {
    const index = selected.findIndex((selected) => selected.uri === track.uri);
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
    postItemsToPlaylist();
    setSelected([]);
  };

  return (
    <main className="main">
      <PlaylistForm
        handlePlaylistChange={handlePlaylistChange}
        playlist={playlist}
        handlePlaylistSubmit={handlePlaylistSubmit}
      />
      <SearchTrack
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
        handleSearchSubmit={(e) => handleSearchSubmit(e, currentAccessToken)}
      />
      {tracks && (
        <TrackList tracks={tracks} handleSelectTrack={handleSelectTrack} isSelected={isSelected} />
      )}
    </main>
  );
};

export default CreatePlaylist;
