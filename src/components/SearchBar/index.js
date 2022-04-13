const SearchBar = (props) => {
  const { handleSearchSubmit, handleSearchChange, searchInput } = props;
  return (
    <form className="search-bar" onSubmit={handleSearchSubmit}>
      <label htmlFor="keyword" className="search__label">
        Spotify Track Search
      </label>
      <div className="input-wrapper">
        <input
          id="keyword"
          name="keyword"
          type="text"
          className="search__input"
          onChange={handleSearchChange}
          value={searchInput}
          placeholder="Enter the keyword for search the tracks"
          required
        />
      </div>
      <button type="submit" className="btn btn--search" disabled={!searchInput}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
