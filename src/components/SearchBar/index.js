import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";

const SearchBar = (props) => {
  const { handleSearchSubmit, handleSearchChange, searchInput } = props;
  return (
    // <form className="search-bar" onSubmit={handleSearchSubmit}>
    <FormControl as={"form"} onSubmit={handleSearchSubmit}>
      {/* <label htmlFor="keyword" className="search__label">
        Spotify Track Search
      </label> */}
      <FormLabel htmlFor="keyword">Spotify Track Search</FormLabel>
      <div className="input-wrapper">
        {/* <input
          id="keyword"
          name="keyword"
          type="text"
          className="search__input"
          onChange={handleSearchChange}
          value={searchInput}
          placeholder="Enter the keyword for search the tracks"
          required
        /> */}
        <Input
          id="keyword"
          name="keyword"
          type="text"
          onChange={handleSearchChange}
          value={searchInput}
          placeholder="Enter the keyword for search the tracks"
          required
        />
      </div>
      {/* <button type="submit" className="btn btn--search" disabled={!searchInput}>
        Search
      </button> */}
      {/* <Button type="submit" colorScheme="blue" disabled={!searchInput}>
        Search
      </Button> */}
    </FormControl>
    // </form>
  );
};

export default SearchBar;
