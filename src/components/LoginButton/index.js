import { Button } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";

import { requestAuth } from "../../api/auth";

const LoginButton = ({ mt = "", size = "md" }) => {
  return (
    <Button colorScheme="blue" leftIcon={<FaSpotify />} onClick={requestAuth} mt={mt} size={size}>
      Login with Spotify
    </Button>
  );
};

export default LoginButton;
