import AlbumImg from "../AlbumImg";
import SongInfo from "../SongInfo";
import { data } from "../../data";

const SongTrack = () => {
  const {
    album: {
      images: [{ url: albumImgSrc }],
      name: albumName,
    },
    artists: [{ name: songArtist }],
    name: songTitle,
  } = data;
  console.log(data);

  return (
    <div className="song-track">
      <AlbumImg src={albumImgSrc} alt={albumName} />
      <SongInfo title={songTitle} artist={songArtist} />
    </div>
  );
};

export default SongTrack;
