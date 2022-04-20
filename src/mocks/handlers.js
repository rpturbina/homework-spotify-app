// src/mocks/handlers.js
import { rest } from "msw";

import { MockSearchResponse as tracks } from "./response/tracks";

const BASE_SPOTIFY_API_URL = "https://api.spotify.com/v1";

export const handlers = [
  rest.get(`${BASE_SPOTIFY_API_URL}/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(tracks));
  }),
];
