import { Flex, Image, Box, Text, Button, Heading, SlideFade } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";
import { selectTrack } from "../../redux/actions";

import { RootState, AppDispatch } from "../../redux/store";

interface Props {
  imageUrl: string;
  albumName: string;
  songTitle: string;
  songArtist: string;
  songDuration: number;
  trackUri: string;
}

const Track = (props: Props) => {
  const { imageUrl, albumName, songTitle, songArtist, songDuration, trackUri } = props;

  const dispatch: AppDispatch = useDispatch();
  const currentSelectedTracks = useSelector((state: RootState) => state.selectedTracks);

  const currentLoadingState = useSelector((state: RootState) => state.loadingState);

  const isSelected = (trackUri: string) => {
    return currentSelectedTracks.some((selected: { uri: string }) => selected.uri === trackUri);
  };

  const handleSelectTrack = (trackUri: string) => {
    const track = {
      title: songTitle,
      artist: songArtist,
      duration_ms: songDuration,
      uri: trackUri,
    };

    if (!isSelected(trackUri)) {
      return dispatch(selectTrack([...currentSelectedTracks, track]));
    }

    const newSelected = currentSelectedTracks.filter(
      (selected: { uri: string }) => selected.uri !== track.uri
    );
    return dispatch(selectTrack(newSelected));
  };

  return (
    <SlideFade in={!currentLoadingState} offsetY="400" unmountOnExit={currentLoadingState}>
      <Flex
        as="li"
        columnGap="1rem"
        alignItems="center"
        bg="whiteAlpha.200"
        padding="0.5rem"
        borderRadius="md"
        border="1px"
        borderColor="gray.600"
      >
        <Image borderRadius="sm" maxWidth="120px" src={imageUrl} alt={albumName} />
        <Box>
          <Heading as="h2" size="sm">
            {songTitle}
          </Heading>
          <Text as="h3">{songArtist}</Text>
          <Text as="h4" opacity="0.6" letterSpacing="1px">
            {millisToMinutesAndSeconds(songDuration)}
          </Text>
        </Box>
        <Button
          colorScheme="blue"
          onClick={() => handleSelectTrack(trackUri)}
          marginLeft="auto"
          marginRight="1rem"
          minWidth="auto"
          variant={isSelected(trackUri) ? "outline" : "solid"}
        >
          {isSelected(trackUri) ? "Deselect" : "Select"}
        </Button>
      </Flex>
    </SlideFade>
  );
};

export default Track;
