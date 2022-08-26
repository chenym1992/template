import styled from "styled-components";
import LanguageSwitch from "./LanguageSwitch";
import ThemeSwitch from "./ThemeSwitch";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 8px;
`;
const RightHeader = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  margin-right: 30px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      margin-right: 0.5rem;
  `};
`;
export default function Header() {
  return <HeaderWrapper>
    <RightHeader>
        <ThemeSwitch/>
        <LanguageSwitch/>
    </RightHeader>
  </HeaderWrapper>;
}
