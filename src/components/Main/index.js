import { Flex, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import LoginButton from "../LoginButton";

const Main = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.accessToken);

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Flex as="main" flexDirection="column" alignItems="center" rowGap="1rem">
      <Flex columnGap="0.5rem">
        <Heading align="center">Hello there, </Heading>
        <Image
          src="https://raw.githubusercontent.com/iampavangandhi/iampavangandhi/master/gifs/Hi.gif"
          boxSize="40px"
        />
      </Flex>
      <Heading as="h1" size="md" align="center" fontWeight="medium">
        Create your Spotify playlist here!
      </Heading>
      <LoginButton mt="1rem" />
    </Flex>
  );
};

export default Main;
