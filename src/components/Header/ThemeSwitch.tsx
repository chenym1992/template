import styled from "styled-components";
import { useDarkModeManager } from "../../state/user/hooks";
const ThemeLabel = styled.span<{ enabled: boolean }>`
  padding: 0.1rem 0.6rem;
  border-radius: 12px;
  background: ${({ theme, enabled }) => (enabled ? theme.primary1 : "none")};
  color: ${({ theme, enabled }) => (enabled ? theme.white : theme.text1)};
  font-size: 1rem;
  font-weight: ${({ enabled }) => (enabled ? "500" : "400")};
  :hover {
    user-select: ${({ enabled }) => (enabled ? "none" : "initial")};
    background: ${({ theme, enabled }) => (enabled ? theme.primary1 : "none")};
    color: ${({ theme, enabled }) => (enabled ? theme.white : theme.text1)};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ThemeToggle = styled.a<{ enabled: boolean }>`
  border-radius: 12px;
  opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
  cursor: ${({ enabled }) => (enabled ? "pointer" : "default")};
  background: ${({ theme }) => theme.bg4};
  color: ${({ theme }) => theme.primary1};
  display: flex;
  width: fit-content;
  margin-left: 0.5rem;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
`;

export default function ThemeSwitch() {
  const [darkMode, toggleSetDarkMode] = useDarkModeManager();
  return (
    <ThemeToggle
      enabled={true}
      onClick={() => {
        toggleSetDarkMode();
      }}
    >
      <ThemeLabel enabled={!darkMode}>Light</ThemeLabel>
      <ThemeLabel enabled={darkMode}>Dark</ThemeLabel>
    </ThemeToggle>
  );
}
