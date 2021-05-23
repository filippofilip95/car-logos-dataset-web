import * as React from "react";
import List from "src/components/List";
import { useState } from "react";
import SearchInput from "src/components/header/SearchInput";
import { Stack } from "@chakra-ui/react";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <Stack
      p={2}
      spacing={5}
      display="flex"
      direction="column"
      overflow="hidden"
      h="100%"
    >
      <SearchInput onDebouncedChange={(val) => setSearch(val)} />
      <List search={search} />
    </Stack>
  );
};
