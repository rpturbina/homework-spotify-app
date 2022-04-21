import { Flex, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import LoginButton from "../LoginButton";

const Header = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.accessToken);

  return (
    <Flex as="header" justifyContent="space-between" paddingBlock="1.5rem">
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <>
          <Link fontSize="xl" fontWeight="black" href="/" _hover={{ opacity: 0.8 }}>
            UrSpotify
          </Link>
          <LoginButton />
        </>
      )}
    </Flex>
  );
};

export default Header;
