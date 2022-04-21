import { Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import LoginButton from "../LoginButton";

const Main = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.accessToken);

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Flex as="main" flexDirection="column" alignItems="center" rowGap="10px">
      <Heading>Hello there,</Heading>
      <Text>Please login first before accessing the app.</Text>
      <LoginButton />
    </Flex>
  );
};

export default Main;
