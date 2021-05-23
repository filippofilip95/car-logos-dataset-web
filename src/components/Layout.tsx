import React, { FC, ReactNode } from "react";
import { Container } from "@chakra-ui/react";
import Navigation from "src/components/Navigation";

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = (props) => {
  return (
    <>
      <Navigation />
      <Container
        as="main"
        p={4}
        maxW="container.lg"
        height="calc(100vh - 80px)"
        overflow="auto"
      >
        {props.children}
      </Container>
    </>
  );
};

export default Layout;
