import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";

type Props = {};

export const ColorModeSwitcher: React.FC<Props> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Flex flex="1 2" marginLeft="auto" justify="flex-end">
      <IconButton
        size="md"
        fontSize="lg"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
      />

      <IconButton
        marginLeft={2}
        href="https://github.com/filippofilip95/car-logos-dataset"
        target="_blank"
        as="a"
        size="md"
        fontSize="lg"
        color="current"
        aria-label="Car Logos Dataset Github"
        icon={<FaGithub />}
      />
    </Flex>
  );
};
