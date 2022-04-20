import { render, screen } from "@testing-library/react";
import Track from "../../components/Track";
import { data } from "../../data/OneSample";

const {
  album: {
    images: [{ url }],
    name,
  },
  artists: [{ name: artist }],
  name: title,
  uri,
  duration_ms: duration,
} = data;

const setup = () =>
  render(
    <Track
      key={uri}
      imageUrl={url}
      albumName={name}
      songTitle={title}
      songArtist={artist}
      songDuration={duration}
    />
  );

describe("track test suite", () => {
  it("should have image", () => {
    setup();
    const albumImage = screen.getByRole("img", {
      name: name,
    });

    expect(albumImage).toBeVisible();
  });

  it("should have title", () => {
    setup();
    const songTitle = screen.getByRole("heading", {
      name: title,
    });

    expect(songTitle).toBeVisible();
  });

  it("should have song artist", () => {
    setup();
    const songArtist = screen.getByRole("heading", {
      name: artist,
    });

    expect(songArtist).toBeVisible();
  });

  it("should have song duration", () => {
    setup();
    const songDuration = screen.getByText(duration);

    expect(songDuration).toBeVisible();
  });

  it("should have select button", () => {
    setup();
    const selectButton = screen.getByRole("button", {
      name: /select/i,
    });
    expect(selectButton).toBeVisible();
  });
});
