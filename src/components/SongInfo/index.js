import Button from "../Button";

const SongInfo = ({ title, artist }) => (
  <div className="song-info">
    <h2 className="song-title">{title}</h2>
    <h3 className="song-artist">{artist}</h3>
    <Button type="button" value="Select" />
  </div>
);

export default SongInfo;
