import { Flex, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import SwitchTheme from "../SwitchTheme";

const Header = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.accessToken);

  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="center"
      paddingBlock="1rem"
      columnGap="2rem"
    >
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <>
          <Link fontSize="xl" fontWeight="black" href="/" _hover={{ opacity: 0.8 }}>
            UrSpotify
          </Link>
          <SwitchTheme />
        </>
      )}
    </Flex>
  );
};

export default Header;
