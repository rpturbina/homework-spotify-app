import {
  // useEffect,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

import { searchTracks } from "../../api/spotify";
import { setTracks, setLoading } from "../../redux/actions";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state) => state.accessToken);

  const handleSearchSubmit = async (e, accessToken = "") => {
    if (searchInput) {
      dispatch(setLoading(true));
      e.preventDefault();
      const tracksLimit = 12;
      const tracks = await searchTracks({
        accessToken: accessToken,
        query: searchInput,
        LIMIT: tracksLimit,
      });
      dispatch(setTracks(tracks));
      dispatch(setLoading(false));
    }
  };
  return (
    <Flex as={"form"} onSubmit={(e) => handleSearchSubmit(e, currentAccessToken)} w={"100%"}>
      <Input
        type="text"
        placeholder="Enter the keyword for search the tracks"
        marginRight={2}
        borderRadius="full"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        required
      />
      <IconButton
        isRound
        type={"submit"}
        variant={"ghost"}
        icon={<Search2Icon />}
        aria-label="search"
      />
    </Flex>
  );
};

export default SearchBar;
