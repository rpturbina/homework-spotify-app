import { render, screen } from "@testing-library/react";
import TrackList from "../../components/TrackList/index";

const BASE_SPOTIFY_API_URL = "https://api.spotify.com/v1";

test("Should render tracks result properly", async () => {
  const response = await fetch(`${BASE_SPOTIFY_API_URL}/search`).then((response) =>
    response.json()
  );

  const tracks = response.tracks.items;

  render(<TrackList tracks={tracks} isSelected={() => null} />);

  expect(
    await screen.findByRole("heading", {
      name: /hati-hati di jalan/i,
    })
  ).toBeVisible();
  expect(
    await screen.findByRole("heading", {
      name: /diri/i,
    })
  ).toBeVisible();
  expect(
    await screen.findByRole("heading", {
      name: /monokrom/i,
    })
  ).toBeVisible();
  expect(
    await screen.findByRole("heading", {
      name: /interaksi/i,
    })
  ).toBeVisible();
});
