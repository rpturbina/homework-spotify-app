import {
  Text,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Icon,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const currentUserProfile = useSelector((state) => state.userProfile);

  const isDark = colorMode === "dark";

  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="user-dropdown"
        variant="ghost"
        leftIcon={<ChevronDownIcon marginLeft={2} />}
        display="flex"
      >
        {currentUserProfile && (
          <Avatar
            name={currentUserProfile?.display_name}
            src={currentUserProfile?.images?.[0]?.url ?? "https://picsum.photos/36"}
            size="sm"
            marginRight={2}
          ></Avatar>
        )}
      </MenuButton>
      <MenuList>
        <MenuGroup title={`Hello, ${currentUserProfile?.display_name} !`}>
          <MenuItem onClick={toggleColorMode}>
            <Center>
              <Icon mr={3} as={colorMode === "dark" ? MoonIcon : SunIcon} />
              <Text>{isDark ? "Light Mode" : "Dark Mode"}</Text>
            </Center>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
