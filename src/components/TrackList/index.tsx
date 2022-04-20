import Track from "../Track";
import { Track as SpotifyTrack } from "../../types/spotify";

const TrackList = (props: any) => {
  const { tracks, handleSelectTrack, isSelected } = props;

  return (
    <ul className="track-list">
      {tracks.map((track: SpotifyTrack) => {
        const newTrack = {
          ...track,
          isSelect: isSelected(track) ?? false,
        };
        const {
          album: {
            images: [{ url }],
            name,
          },
          artists: [{ name: artist }],
          name: title,
          uri,
          duration_ms: duration,
          isSelect,
        } = newTrack;
        return (
          <Track
            key={uri}
            imageUrl={url}
            albumName={name}
            songTitle={title}
            songArtist={artist}
            songDuration={duration}
            onSelect={() => handleSelectTrack(track)}
            selectState={isSelect}
          />
        );
      })}
    </ul>
  );
};

export default TrackList;
