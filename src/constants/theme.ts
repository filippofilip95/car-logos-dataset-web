import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "gray.700")(props),
    },
  }),
};

const components = {};

const theme = extendTheme({
  components,
  styles,
});

export default theme;
