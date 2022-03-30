// import datas from "../../data/AllSample";
import SongTrack from "../SongTrack";

const TableOfTracks = ({ tracks }) => {
  const isEmpty = (tracks) => {
    return tracks.length > 0;
  };
  return (
    <div className="table-of-tracks">
      {isEmpty &&
        tracks.map((data, idx) => {
          const {
            album: {
              images: [{ url: src }],
              name,
            },
            artists: [{ name: artist }],
            name: song,
          } = data;
          // console.log(data);
          return (
            <SongTrack
              key={idx}
              albumImgSrc={src}
              albumName={name}
              songTitle={song}
              songArtist={artist}
            />
          );
        })}
    </div>
  );
};

export default TableOfTracks;
