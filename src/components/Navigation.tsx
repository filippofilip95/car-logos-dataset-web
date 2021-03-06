import React, { FC } from "react";
import {
  Flex,
  Stack,
  Heading,
  Button,
  IconButton,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "src/components/header/ColorModeSwitcher";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Routes from "src/constants/routes";

type Props = {};

const Navigation: FC<Props> = (props) => {
  const location = useLocation();
  const bg = useColorModeValue("white", "gray.700");
  const [isSmall] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex p="6" boxShadow="lg" as="nav" height="80px" align="center" bg={bg}>
      {!isSmall && (
        <Heading as="h1" fontSize="2xl" mr="auto" flex="1 1">
          Car Logos Dataset
        </Heading>
      )}
      <Stack
        spacing={2}
        direction="row"
        flex="1 1"
        justify={isSmall ? "flex-start" : "center"}
      >
        <Button
          isActive={location.pathname === Routes.Logos}
          size="md"
          fontSize="lg"
          color="current"
          as={Link}
          to={Routes.Logos}
        >
          Logos
        </Button>
        <Button
          isActive={location.pathname === Routes.About}
          size="md"
          fontSize="lg"
          color="current"
          as={Link}
          to={Routes.About}
        >
          About
        </Button>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        marginLeft="auto"
        flex="1 1"
        ml="auto"
        justify="flex-end"
      >
        <IconButton
          href="https://github.com/filippofilip95/car-logos-dataset"
          target="_blank"
          as="a"
          size="md"
          fontSize="lg"
          color="current"
          aria-label="Car Logos Dataset Github"
          icon={<FaGithub />}
        />
        <ColorModeSwitcher />
      </Stack>
    </Flex>
  );
};

export default Navigation;
