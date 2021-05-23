import * as React from "react";
import { Container } from "@chakra-ui/react";
import Header from "src/components/Header";
import List from "src/components/List";
import { useState } from "react";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header onSearchChanged={(value) => setSearch(value)} />
      <Container
        as="main"
        maxW="container.lg"
        height="calc(100vh - 80px)"
        overflow="auto"
      >
        <List search={search} />
      </Container>
    </>
  );
};
