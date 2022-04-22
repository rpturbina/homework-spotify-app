import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Input, IconButton } from "@chakra-ui/react";

import { searchTracks } from "../../api/spotify";
import { setTracks, setLoading } from "../../redux/actions";
import { RootState } from "../../redux/store";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const currentAccessToken = useSelector((state: RootState) => state.accessToken);

  const handleSearchSubmit = async (
    e: React.FormEvent<EventTarget>,
    accessToken: string
  ): Promise<void> => {
    try {
      if (searchInput) {
        e.preventDefault();
        dispatch(setLoading(true));
        const tracksLimit = 12;
        const tracks = await searchTracks({
          accessToken: accessToken,
          query: searchInput,
          LIMIT: tracksLimit,
        });
        dispatch(setTracks(tracks));
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex as="form" onSubmit={(e) => handleSearchSubmit(e, currentAccessToken)} width="80%">
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
