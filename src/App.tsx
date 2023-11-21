import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "leaflet/dist/leaflet.css";
import { createGlobalStyle } from "styled-components";
import { Home } from "./components/pages/Home.tsx";
import { colors } from "./styles.ts";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
    }
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background: ${colors.bg};
        color: ${colors.primary};
        font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
    }
    *:active,
    *:focus {
        outline: none;
    }
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    input, button, textarea, select {
        font: inherit;
    }
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }
    .leaflet-control-attribution.leaflet-control{
        display: none;
    }
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
