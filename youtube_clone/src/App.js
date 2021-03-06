import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Login from "./pages/Login";


function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <BrowserRouter>
        <Container>
          {/** menu */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

          {/** main */}
          <Main>
              <Navbar />
              <Wrapper>
                <Routes>
                  <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path="signin" element={<Login />} />
                    <Route path="/video" >
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>     
              </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;

`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({theme}) => theme.text}
`;

const Wrapper = styled.div`
  padding: 22px 80px;
`;
