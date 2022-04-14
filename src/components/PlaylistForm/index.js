import { Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";

const PlaylistForm = (props) => {
  const { handlePlaylistChange, handlePlaylistSubmit, playlist, isSelectedEmpty } = props;

  return (
    // <form id="form" className="playlist-form" onSubmit={handlePlaylistSubmit}>
    <FormControl onSubmit={handlePlaylistSubmit} display="none">
      <h2 className="heading">Create Playlist</h2>
      <ul>
        <li>
          {/* <label htmlFor="title" className="form__label">
            Title
          </label> */}
          <FormLabel htmlFor="keyword">Title</FormLabel>
          <Input
            id="title"
            type="text"
            name="title"
            required
            minLength="10"
            placeholder="Add a title"
            className="form__input"
            onChange={handlePlaylistChange}
            value={playlist.title}
          />
          {/* <input
            id="title"
            type="text"
            name="title"
            required
            minLength="10"
            placeholder="Add a title"
            className="form__input"
            onChange={handlePlaylistChange}
            value={playlist.title}
          /> */}
        </li>
        <li>
          {/* <label htmlFor="description" className="form__label">
            Description
          </label> */}
          <FormLabel htmlFor="description">Description</FormLabel>
          {/* <textarea
            id="description"
            name="description"
            placeholder="Add an optional description"
            className="form__textarea"
            onChange={handlePlaylistChange}
            value={playlist.description}
          ></textarea> */}
          <Textarea
            id="description"
            name="description"
            placeholder="Add an optional description"
            className="form__textarea"
            onChange={handlePlaylistChange}
            value={playlist.description}
          ></Textarea>
        </li>
      </ul>
      <Button type="submit" disabled={isSelectedEmpty}>
        Create playlist
      </Button>
      {/* <button type="submit" className="btn btn--create" disabled={isSelectedEmpty}>
        Create playlist
      </button> */}
    </FormControl>
    // </form>
  );
};

export default PlaylistForm;
