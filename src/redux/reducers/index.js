const initialState = {
  accessToken: "",
  searchTracksResult: [],
  selectedTracks: [],
  userProfile: null,
  loadingState: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "auth":
      return { ...state, accessToken: action.payload };
    case "search-tracks":
      return { ...state, searchTracksResult: action.payload };
    case "select-tracks":
      return { ...state, selectedTracks: action.payload };
    case "set-user":
      return { ...state, userProfile: action.payload };
    case "loading":
      return { ...state, loadingState: action.payload };
    default:
      return state;
  }
};

export { appReducer, initialState };
