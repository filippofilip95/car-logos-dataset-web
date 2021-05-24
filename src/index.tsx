import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "src/serviceWorker";
import { HashRouter } from "react-router-dom";
import Router from "src/components/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import theme from "src/constants/theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Router />
        </HashRouter>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();
