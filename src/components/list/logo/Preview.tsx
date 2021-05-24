import React, { FC } from "react";
import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { ManufacturerLogo } from "src/types/Logos";

type Props = {
  onClick?: (e: any) => any;
  logo: ManufacturerLogo;
  compact?: boolean;
};

const Preview: FC<Props> = (props) => {
  const bg = useColorModeValue("gray.100", "gray.600");

  return (
    <Flex
      onClick={props.onClick}
      cursor="pointer"
      direction="column"
      boxShadow="lg"
      maxWidth={"400px"}
      borderRadius="xl"
      overflow="hidden"
      bg="white"
      justifyContent="center"
      mx="auto"
    >
      <Image
        flex="1"
        src={props.logo.image.optimized}
        objectFit="contain"
        m={4}
      />
      {!props.compact && (
        <Box fontSize="xl" bg={bg} p={4}>
          {props.logo.name}
        </Box>
      )}
    </Flex>
  );
};

export default Preview;
