const initialState = { accessToken: "" };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { accessToken: action.payload };
    default:
      return state;
  }
};

export { loginReducer };
