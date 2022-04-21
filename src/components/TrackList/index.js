import { Box } from "@chakra-ui/react";

import Track from "../Track";

const TrackList = ({ tracks }) => {
  return (
    <Box
      as="ul"
      display="grid"
      gridTemplateColumns="repeat(auto-fit, minmax(500px, 1fr))"
      gridAutoRows="minmax(100px, auto)"
      gap="20px"
    >
      {tracks.map((track) => {
        const {
          album: {
            images: [, { url }],
            name,
          },
          artists: [{ name: artist }],
          name: title,
          duration_ms: duration,
          uri,
        } = track;
        return (
          <Track
            key={uri}
            trackUri={uri}
            imageUrl={url}
            albumName={name}
            songTitle={title}
            songArtist={artist}
            songDuration={duration}
          />
        );
      })}
    </Box>
  );
};

export default TrackList;
