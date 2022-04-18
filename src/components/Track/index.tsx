import { Box, Image, Button } from "@chakra-ui/react";

const Track = (props) => {
  const { imageUrl, albumName, songTitle, songArtist, songDuration, onSelect, selectState } = props;

  return (
    <li className="song-track">
      <Box boxSize="sm">
        <Image src={imageUrl} alt={albumName} />
      </Box>
      {/* <img src={imageUrl} alt={albumName} className="album-image" /> */}
      <div className="song__info">
        <h2 className="song__title">{songTitle}</h2>
        <h3 className="song__artist">{songArtist}</h3>
        {/* <button className="btn btn--select" onClick={onSelect}>
          {selectState ? "Deselect" : "Select"}
        </button> */}
        <p>{songDuration}</p>
        <Button onClick={onSelect}>{selectState ? "Deselect" : "Select"}</Button>
      </div>
    </li>
  );
};

export default Track;
