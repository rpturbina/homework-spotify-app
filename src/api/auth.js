import generateRandomString from "../utils/generateRandomString";
import { BASE_SPOTIFY_AUTH_URL } from "../constant/url";

/**
 * Generates an authorization url
 * @param {object} params The search parameter object
 * @returns {string} The generated authorization url
 */
const generateAuthUrl = (params) => {
  const searchParams = new URLSearchParams(params);
  return `${BASE_SPOTIFY_AUTH_URL}?${searchParams}`;
};

/**
 * Request implicit grant flow authorization by assign authorization url to location
 */
const requestAuth = () => {
  const state = generateRandomString(16);
  localStorage.setItem("spotify_auth_state", state);
  const params = {
    response_type: "token",
    // eslint-disable-next-line no-undef
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    scope: "playlist-modify-private",
    // eslint-disable-next-line no-undef
    redirect_uri: window.location.href,
    state: state,
  };
  const url = generateAuthUrl(params);
  window.location.assign(url);
};

export { requestAuth };
