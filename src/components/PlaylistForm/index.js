const PlaylistForm = () => {
  return (
    <section className="playlist-form">
      <form id="form" className="form">
        <h2 className="heading">Create Playlist</h2>
        <ul>
          <li>
            <label htmlFor="playlisyTitle" className="form__label">
              Title
            </label>
            <input
              id="playlistTitle"
              type="text"
              name="playlistTitle"
              required
              minLength="10"
              placeholder="Add a title"
              className="form__input"
            />
          </li>
          <li>
            <label htmlFor="playlistDescription" className="form__label">
              Description
            </label>
            <textarea
              id="playlistDescription"
              name="playlistDescription"
              placeholder="Add an optional description"
              className="form__textarea"
            ></textarea>
          </li>
        </ul>
        {/* <!-- <button>Submit</button> --> */}
        <button type="submit" className="btn btn--save">
          Create playlist
        </button>
      </form>
      {/* <!-- <ul class="list-of-playlist"></ul> --> */}
    </section>
  );
};

export default PlaylistForm;
