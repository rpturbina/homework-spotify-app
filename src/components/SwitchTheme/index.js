import { Switch, Icon, useColorMode, Center } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const SwitchTheme = ({ withIcon = true }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      {withIcon && <Icon mr={3} as={colorMode === "dark" ? MoonIcon : SunIcon} />}
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
    </Center>
  );
};

export default SwitchTheme;
