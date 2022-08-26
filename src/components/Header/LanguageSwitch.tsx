import { useTranslation } from "react-i18next";
import styled from "styled-components";
const LanguageLabel = styled.span<{ enabled: boolean }>`
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
const LanguageToggle = styled.a<{ enabled: boolean }>`
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

export default function LanguageSwitch() {
  const { language, changeLanguage } = useTranslation()["i18n"];
  return (
    <LanguageToggle
      enabled={true}
      onClick={() => {
        changeLanguage(
          language === "zh-CN" || language === "zh" ? "en" : "zh-CN"
        );
      }}
    >
      <LanguageLabel enabled={language === "zh-CN" || language === "zh"}>
        简体中文
      </LanguageLabel>
      <LanguageLabel enabled={language !== "zh-CN" && language !== "zh"}>
        English
      </LanguageLabel>
    </LanguageToggle>
  );
}
