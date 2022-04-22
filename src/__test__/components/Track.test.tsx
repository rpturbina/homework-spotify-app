import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import Track from "../../components/Track";
import { data } from "../../data/OneSample";
import store from "../../redux/store";
import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";

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
    <Provider store={store}>
      <Track
        key={uri}
        trackUri={uri}
        imageUrl={url}
        albumName={name}
        songTitle={title}
        songArtist={artist}
        songDuration={duration}
      />
    </Provider>
  );

describe("track component test suite", () => {
  it("track should have album image", () => {
    setup();
    const albumImage = screen.getByRole("img", {
      name: name,
    });

    expect(albumImage).toBeInTheDocument();
  });

  it("track should have song title", () => {
    setup();
    const songTitle = screen.getByRole("heading", {
      name: title,
    });

    expect(songTitle).toBeInTheDocument();
  });

  it("track should have song artist", () => {
    setup();
    const songArtist = screen.getByRole("heading", {
      name: artist,
    });

    expect(songArtist).toBeInTheDocument();
  });

  it("track should have song duration", () => {
    setup();
    const durationMillisToMinuteAndSecond = millisToMinutesAndSeconds(duration);
    const songDuration = screen.getByRole("heading", {
      name: durationMillisToMinuteAndSecond,
    });

    expect(songDuration).toBeInTheDocument();
  });

  it("track should have select button", () => {
    setup();
    const selectButton = screen.getByRole("button", {
      name: /select/i,
    });
    expect(selectButton).toBeInTheDocument();
  });

  it("should change the button text when selected", () => {
    setup();
    const selectButtonText = screen.getByText(/select/i);
    expect(selectButtonText).toBeInTheDocument();

    userEvent.click(selectButtonText);
    expect(selectButtonText.textContent).toBe("Deselect");

    userEvent.click(selectButtonText);
    expect(selectButtonText.textContent).toBe("Select");
  });
});
