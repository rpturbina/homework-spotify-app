const authToken = (accessToken) => ({ type: "login", payload: accessToken });

export { authToken };
