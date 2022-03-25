import AlbumImg from "../../components/AlbumImg";
import SongInfo from "../../components/SongInfo";
import { data } from "../../data";

const Main = () => {
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
    <main className="main">
      <section className="album-track">
        <AlbumImg src={albumImgSrc} alt={albumName} />
        <SongInfo title={songTitle} artist={songArtist} />
      </section>
    </main>
  );
};

export default Main;
