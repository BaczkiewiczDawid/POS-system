import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/Theme";
import GlobalStyle from "./assets/styles/GlobalStyle";
import Home from "./components/views/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
