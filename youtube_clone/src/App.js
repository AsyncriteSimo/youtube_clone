import styled from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Container>
      {/** menu */}
      <Menu />

      {/** main */}
      <Main>
          <Navbar />
          <Wrapper>
            Videos cards
          </Wrapper>
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;

`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;
