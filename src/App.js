import Collector from "./components/Collector";
import styled from "styled-components";

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppWrap>
      <Collector />
    </AppWrap>
  );
}

export default App;
