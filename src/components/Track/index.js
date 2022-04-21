import { Flex, Image, Box, Text, Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import millisToMinutesAndSeconds from "../../utils/millisToMinutesAndSeconds";
import { selectTrack } from "../../redux/actions";

const Track = (props) => {
  const { imageUrl, albumName, songTitle, songArtist, songDuration, trackUri } = props;

  const dispatch = useDispatch();
  const currentSelectedTracks = useSelector((state) => state.selectedTracks);

  const isSelected = (trackUri) => {
    return currentSelectedTracks.some((selected) => selected.uri === trackUri);
  };

  const handleSelectTrack = (trackUri) => {
    const track = {
      title: songTitle,
      artist: songArtist,
      duration_ms: songDuration,
      uri: trackUri,
    };

    if (!isSelected(trackUri)) {
      return dispatch(selectTrack([...currentSelectedTracks, track]));
    }

    const newSelected = currentSelectedTracks.filter((selected) => selected.uri !== track.uri);
    return dispatch(selectTrack(newSelected));
  };

  return (
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
        colorScheme="teal"
        onClick={() => handleSelectTrack(trackUri)}
        marginLeft="auto"
        marginRight="1rem"
        minWidth="auto"
        variant={isSelected(trackUri) ? "outline" : "solid"}
      >
        {isSelected(trackUri) ? "Deselect" : "Select"}
      </Button>
    </Flex>
  );
};

export default Track;
