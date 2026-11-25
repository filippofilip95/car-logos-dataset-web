import React, { FC, ReactNode } from "react";
import { Box, Container, Link } from "@chakra-ui/react";
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
        <Box as="footer" py={6} textAlign="center" fontSize="sm" color="gray.500">
          Built by{" "}
          <Link href="https://www.digitaliko.com" isExternal textDecoration="underline">
            Digitaliko
          </Link>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
