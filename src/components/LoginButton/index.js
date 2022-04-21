import { Button } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

import { requestAuth } from "../../api/auth";

const LoginButton = () => {
  return (
    <Button colorScheme="teal" leftIcon={<FaSpotify />} onClick={requestAuth}>
      Login with Spotify
    </Button>
  );
};

export default LoginButton;
