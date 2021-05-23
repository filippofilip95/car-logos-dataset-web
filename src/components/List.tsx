import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import { useFilterLogos, useLogos } from "src/components/List.utils";
import Loading from "src/components/list/Loading";
import Logo from "src/components/list/Logo";

type Props = {
  search: string;
};

const List: FC<Props> = (props) => {
  const { status, data } = useLogos();
  const hasData = status === "fetched" && Array.isArray(data);
  const filteredLogos = useFilterLogos(props.search, data);

  return (
    <Box padding={4}>
      {status === "fetching" && <Loading />}
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
