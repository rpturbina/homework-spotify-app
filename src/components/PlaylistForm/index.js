const CreatePlaylistForm = () => {
  return (
    <section class="playlist-form">
      <form id="form" class="form">
        <h2 class="heading">Create Playlist</h2>
        <ul>
          <li>
            <label for="title" class="form__label">
              Title
            </label>
            <input
              required
              minlength="10"
              type="text"
              id="title"
              name="title"
              placeholder="Add a title"
              class="form__input"
            />
          </li>
          <li>
            <label for="description" class="form__label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Add an optional description"
              class="form__textarea"
            ></textarea>
          </li>
        </ul>
        {/* <!-- <button>Submit</button> --> */}
        <button type="submit" class="btn btn--save">
          Create playlist
        </button>
      </form>
      {/* <!-- <ul class="list-of-playlist"></ul> --> */}
    </section>
  );
};

export default CreatePlaylistForm;
