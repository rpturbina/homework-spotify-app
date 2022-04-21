import { Box, Text, Link } from "@chakra-ui/react";

import { myLinks } from "../../data/OneSample";

const Footer = () => {
  const { github } = myLinks;

  return (
    <Box as="footer" w="100%" paddingBlock="20px">
      <Text textAlign="center">
        Made with 🤍 by{" "}
        <Link href={github} isExternal>
          rpturbina
        </Link>{" "}
        ©2022
      </Text>
    </Box>
  );
};

export default Footer;
