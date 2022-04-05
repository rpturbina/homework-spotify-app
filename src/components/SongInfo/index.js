import Button from "../Button";

const SongInfo = ({ title, artist, selected, isSelect }) => {
  return (
    <div className="song-info">
      <h2 className="song-title">{title}</h2>
      <h3 className="song-artist">{artist}</h3>
      <Button type="button" value={isSelect ? "Select" : "Deselect"} onClick={selected} />
    </div>
  );
};

export default SongInfo;
