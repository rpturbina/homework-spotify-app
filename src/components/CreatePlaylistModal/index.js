import {
  Box,
  Text,
  Wrap,
  Tag,
  useToast,
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postPlaylist, postItemsToPlaylist } from "../../api/spotify";
import { selectTrack } from "../../redux/actions";

const SelectedTrackTags = ({ currentSelectedTracks }) => {
  return (
    <Box mt={2}>
      <Text>
        {currentSelectedTracks.length} {currentSelectedTracks.length < 2 ? "track" : "tracks"}{" "}
        selected
      </Text>
      <Wrap spacing={2} mt={2}>
        {currentSelectedTracks.map((track) => {
          return (
            <Tag colorScheme="blue" key={track.uri}>
              {track.title} by {track.artist}
            </Tag>
          );
        })}
      </Wrap>
    </Box>
  );
};

const CreatePlaylistModal = ({ disabled }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();
  const dispatch = useDispatch();
  const initialRef = useRef();
  const finalRef = useRef();

  const currentAccessToken = useSelector((state) => state.accessToken);
  const currentUserProfile = useSelector((state) => state.userProfile);
  const currentSelectedTracks = useSelector((state) => state.selectedTracks);
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
    tracks: currentSelectedTracks,
  });

  const handlePlaylistChange = (e) => {
    const { name, value } = e.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const handlePlaylistSubmit = async (e) => {
    e.preventDefault();

    if (playlist.title.length < 10) {
      return toast({
        title: "Woopsy!",
        description: "Title at least should have 10 characters",
        status: "error",
      });
    }

    try {
      const { id: userId } = currentUserProfile;
      const { id: playlistId } = await postPlaylist({
        userId: userId,
        playlist: playlist,
        accessToken: currentAccessToken,
      });

      postItemsToPlaylist({
        playlistId: playlistId,
        selectedTracks: currentSelectedTracks,
        accessToken: currentAccessToken,
      });
    } catch (error) {
      console.error(error);
      return toast({
        title: "Woopsy!",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    dispatch(selectTrack([]));
    setPlaylist({ ...playlist, title: "", description: "" });
    onClose();

    return toast({
      title: `Horay! Your playlist created.`,
      description: `We've created "${playlist.title}" playlist for you.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen} disabled={disabled}>
        Create Playlist
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handlePlaylistSubmit}>
          <ModalHeader>Create New Playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                name="title"
                ref={initialRef}
                placeholder="Add a playlist title"
                onChange={handlePlaylistChange}
              />
            </FormControl>
            <FormControl id="description" mt={2}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="description"
                onChange={handlePlaylistChange}
                placeholder="Add an optional description"
              />
            </FormControl>
            <SelectedTrackTags currentSelectedTracks={currentSelectedTracks} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePlaylistModal;
