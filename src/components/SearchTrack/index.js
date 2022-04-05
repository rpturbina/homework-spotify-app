const SearchTrack = (props) => {
  const { handleSearchSubmit, handleSearchChange, searchInput } = props;
  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label htmlFor="keyword" className="search-label">
        Spotify Track Search
      </label>
      <input
        id="keyword"
        name="keyword"
        type="text"
        className="input"
        onChange={handleSearchChange}
        value={searchInput}
        placeholder="Enter the keyword for search the tracks"
        required
      />
      <button type="submit" className="btn btn--search">
        Search
      </button>
    </form>
  );
};

export default SearchTrack;
