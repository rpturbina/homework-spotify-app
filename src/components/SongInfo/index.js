import Button from "../Button";

const SongInfo = ({ title, artist }) => (
  <div className="song-info">
    <h1 className="song-title">{title}</h1>
    <h2 className="song-artist">{artist}</h2>
    <Button type="button" value="Select" />
  </div>
);

export default SongInfo;
