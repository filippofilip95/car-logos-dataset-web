import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { useFilterLogos } from "src/components/List.utils";
import Loading from "src/components/list/Loading";
import Logo from "src/components/list/Logo";
import { useQuery } from "react-query";
import LogosApi from "src/api/logos";

type Props = {
  search: string;
};

const List: FC<Props> = (props) => {
  const { data, isLoading, isFetched } = useQuery("allLogos", LogosApi.all);
  const hasData = isFetched && Array.isArray(data);
  const filteredLogos = useFilterLogos(props.search, data);

  return (
    <Box overflow="auto">
      {isLoading && <Loading />}
      <Box mb={4}>{filteredLogos.length} results</Box>
      {hasData && (
        <SimpleGrid minChildWidth={200} gap={5}>
          {filteredLogos.map((logo) => (
            <Logo key={logo.slug} logo={logo} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default List;
