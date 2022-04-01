const Track = (props) => {
  const { imageUrl, albumName, songTitle, songArtist, onSelect, selectState } = props;

  return (
    <div className="song-track">
      <img src={imageUrl} alt={albumName} className="album-image" />
      <div className="song-info">
        <h2 className="song-title">{songTitle}</h2>
        <h3 className="song-artist">{songArtist}</h3>
        <button className="btn btn--select" onClick={onSelect}>
          {/* {selectState ? "Deselect" : "Select"} */}
          Select
        </button>
      </div>
    </div>
  );
};

export default Track;
