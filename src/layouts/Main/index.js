import TrackList from "../../components/TrackList";
// import Track from "../../components/Track";
import CreatePlaylistForm from "../../components/PlaylistForm";

const Main = () => {
  return (
    <main className="main">
      <CreatePlaylistForm />
      <TrackList />
      {/* <Track /> */}
    </main>
  );
};

export default Main;
