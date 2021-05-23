import { Flex, Heading } from "@chakra-ui/react";
import React, { FC } from "react";
import { ColorModeSwitcher } from "src/components/header/ColorModeSwitcher";
import SearchInput from "src/components/header/SearchInput";

type Props = {
  onSearchChanged(str: string): void;
};

const Header: FC<Props> = (props) => {
  return (
    <Flex p="6" boxShadow="lg" as="header" height="80px" align="center">
      <Heading as="h1" fontSize="lg" marginRight="auto" flex="1 1">
        Car Logos Dataset
      </Heading>
      <SearchInput onDebouncedChange={props.onSearchChanged} />
      <ColorModeSwitcher />
    </Flex>
  );
};

export default Header;
