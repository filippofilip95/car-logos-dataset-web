import React, { FC } from "react";
import { useQuery } from "react-query";
import { Box, useColorModeValue } from "@chakra-ui/react";
import LogosApi from "src/api/logos";
import Loading from "src/components/list/Loading";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

type Props = {};

const AboutProject: FC<Props> = (props) => {
  const { data, isLoading } = useQuery("aboutProject", LogosApi.readme);
  const bg = useColorModeValue("white", "gray.600");

  return (
    <Box>
      {isLoading && <Loading />}
      {data && (
        <Box bg={bg} p={5} borderRadius={5} boxShadow="lg">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            children={data}
            escapeHtml={false}
          />
        </Box>
      )}
    </Box>
  );
};

export default AboutProject;
