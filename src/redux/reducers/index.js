const initialState = { accessToken: "" };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return { accessToken: action.payload };
    default:
      return state;
  }
};
