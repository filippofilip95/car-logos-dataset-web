import React, { FC } from "react";
import { useQuery } from "react-query";
import { Box, useColorModeValue } from "@chakra-ui/react";
import LogosApi from "src/api/logos";
import Loading from "src/components/list/Loading";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";

type Props = {};

const REPO_BLOB = "https://github.com/filippofilip95/car-logos-dataset/blob/master/";

// The README links LICENSE and CONTRIBUTING.md relative to the repo; on this site they would 404.
export const toRepoUrl = (href: string) =>
  ReactMarkdown.uriTransformer(
    href && !/^([a-z]+:|#|\/)/i.test(href) ? REPO_BLOB + href.replace(/^\.\//, "") : href
  );

const AboutProject: FC<Props> = (props) => {
  const { data, isLoading } = useQuery("aboutProject", LogosApi.readme);
  const bg = useColorModeValue("white", "gray.600");

  return (
    <Box>
      {isLoading && <Loading />}
      {data && (
        <Box bg={bg} p={10} borderRadius={5} boxShadow="lg">
          <ReactMarkdown
            components={ChakraUIRenderer()}
            transformLinkUri={toRepoUrl}
            children={data}
          />
        </Box>
      )}
    </Box>
  );
};

export default AboutProject;
