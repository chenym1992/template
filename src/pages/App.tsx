import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Home from "./Home";
const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`;
const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      padding: 16px;
  `};
  z-index: 1;
`;

export default function App() {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BodyWrapper>
        </AppWrapper>
      </BrowserRouter>
    </Suspense>
  );
}
