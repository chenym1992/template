import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import reactLogo from "../../assets/react.svg";
import { ButtonPrimary } from "../../components/Button";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: 160px;
  text-align: center;
`;
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

function Home() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  return (
    <Container>
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
      <p>{t("docs")}</p>
    </Container>
  );
}

export default Home;
