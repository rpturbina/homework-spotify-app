import AlbumImg from "../AlbumImg";
import SongInfo from "../SongInfo";

const SongTrack = ({ albumImgSrc, albumName, songTitle, songArtist }) => {
  return (
    <div className="song-track">
      <AlbumImg src={albumImgSrc} alt={albumName} />
      <SongInfo title={songTitle} artist={songArtist} />
    </div>
  );
};

export default SongTrack;
