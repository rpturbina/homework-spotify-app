import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PlaylistForm from "../../components/PlaylistForm";
import SearchTrack from "../../components/SearchBar";
import TrackList from "../../components/TrackList";

import { getUser, postItemsToPlaylist, postPlaylist, searchTracks } from "../../libs/spotify";

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

  useEffect(async () => {
    const user = await getUser(currentAccessToken);
    setUserProfile(user);
  }, [currentAccessToken]);

  const handleSearchChange = (e) => setSearchInput(e.target.value);

  const handleSearchSubmit = async (e, accessToken = "") => {
    if (searchInput) {
      e.preventDefault();
      const tracksLimit = 12;
      const tracks = await searchTracks({
        accessToken: accessToken,
        query: searchInput,
        LIMIT: tracksLimit,
      });
      setTracks(tracks);
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

  const handlePlaylistSubmit = async (e) => {
    e.preventDefault();

    if (!selected.length) {
      alert("Please select track");
      return;
    }

    const { id: userId } = userProfile;
    const { id: playlistId } = await postPlaylist({
      userId: userId,
      playlist: playlist,
      accessToken: currentAccessToken,
    });

    postItemsToPlaylist({
      playlistId: playlistId,
      selectedTracks: selected,
      accessToken: currentAccessToken,
    });

    setSelected([]);
    setPlaylist({ ...playlist, title: "", description: "" });
  };

  return (
    <main className="main">
      <PlaylistForm
        handlePlaylistChange={handlePlaylistChange}
        playlist={playlist}
        handlePlaylistSubmit={handlePlaylistSubmit}
        isSelectedEmpty={!selected.length}
      />
      <SearchTrack
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
        handleSearchSubmit={(e) => handleSearchSubmit(e, currentAccessToken)}
      />
      {tracks.length > 0 && (
        <TrackList tracks={tracks} handleSelectTrack={handleSelectTrack} isSelected={isSelected} />
      )}
    </main>
  );
};

export default CreatePlaylist;
