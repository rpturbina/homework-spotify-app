const authToken = (accessToken) => ({
  type: "auth",
  payload: accessToken,
});

const setTracks = (searchTracksResult) => ({
  type: "search-tracks",
  payload: searchTracksResult,
});

const selectTrack = (selectedTracks) => ({
  type: "select-tracks",
  payload: selectedTracks,
});

const setUser = (userProfile) => ({
  type: "set-user",
  payload: userProfile,
});

export { authToken, setTracks, selectTrack, setUser };
