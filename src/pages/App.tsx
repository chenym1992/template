import { useState } from "react";
import styled, { keyframes } from "styled-components";
import reactLogo from "../assets/react.svg";
import { ButtonPrimary } from "../components/Button";

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogo = styled(Logo)`
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const Docs = styled.p`
  color: ${({ theme }) => theme.text5};
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <Logo src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <ButtonPrimary onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </ButtonPrimary>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <Docs>Click on the Vite and React logos to learn more</Docs>
    </div>
  );
}

export default App;
