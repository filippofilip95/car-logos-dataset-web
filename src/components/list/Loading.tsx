import React, { FC } from "react";
import { Spinner, Stack, Text } from "@chakra-ui/react";

type Props = {};

const Loading: FC<Props> = (props) => {
  return (
    <Stack spacing={4} align="center" margin={8}>
      <Spinner size="xl" />
      <Text fontSize="lg">Loading...</Text>
    </Stack>
  );
};

export default Loading;
