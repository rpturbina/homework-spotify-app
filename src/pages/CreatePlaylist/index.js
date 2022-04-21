import { Stack, Button, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import Main from "../../components/Main";
import SearchBar from "../../components/SearchBar";
import TrackList from "../../components/TrackList";
import CreatePlaylistModal from "../../components/CreatePlaylistModal";
import { selectTrack, setUser } from "../../redux/actions";
import { getUser } from "../../api/spotify";

const CreatePlaylist = () => {
  const currentAccessToken = useSelector((state) => state.accessToken);
  const currentSelectedTracks = useSelector((state) => state.selectedTracks);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser(currentAccessToken);
      dispatch(setUser(user));
    };
    fetchData();
  }, [dispatch, currentAccessToken]);

  const currentTracksResult = useSelector((state) => state.searchTracksResult);

  return (
    <Stack minHeight="100vh" paddingInline="1rem" minWidth="300px">
      <Header>
        <SearchBar />
      </Header>
      <Main>
        <Flex as="main" justifyContent="flex-end" columnGap="1rem" paddingBlock="1rem">
          <Button
            leftIcon={<DeleteIcon />}
            colorScheme="red"
            onClick={() => dispatch(selectTrack([]))}
            type="button"
            variant="ghost"
            disabled={currentSelectedTracks.length === 0}
          >
            Clear Selection
          </Button>
          <CreatePlaylistModal disabled={currentSelectedTracks.length === 0} />
        </Flex>
        {currentTracksResult.length > 0 && <TrackList tracks={currentTracksResult} />}
      </Main>
    </Stack>
  );
};

export default CreatePlaylist;
