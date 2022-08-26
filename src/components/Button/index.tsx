import styled from "styled-components";
import { darken } from "polished";

const Base = styled.button<{
  padding?: string;
  width?: string;
  borderRadius?: string;
  altDisabledStyle?: boolean;
}>`
  padding: ${({ padding }) => (padding ? padding : "18px")};
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border-radius: 20px;
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  outline: none;
  border: 1px solid transparent;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:disabled {
    cursor: auto;
  }

  > * {
    user-select: none;
  }
`;

export const ButtonPrimary = styled(Base)`
  background-color: ${({ theme }) => theme.primary1};
  color: white;
  &:focus {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.05, theme.primary1)};
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.primary1)};
  }
  &:active {
    box-shadow: 0 0 0 1pt ${({ theme }) => darken(0.1, theme.primary1)};
    background-color: ${({ theme }) => darken(0.1, theme.primary1)};
  }
  &:disabled {
    background-color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? theme.primary1 : theme.bg3};
    color: ${({ theme, altDisabledStyle }) =>
      altDisabledStyle ? "white" : theme.text3};
    cursor: auto;
    box-shadow: none;
    border: 1px solid transparent;
    outline: none;
    opacity: ${({ altDisabledStyle }) => (altDisabledStyle ? "0.7" : "1")};
  }
`;

export const ButtonLight = styled(Base)`
  background-color: ${({ theme }) => theme.primary5};
  color: ${({ theme }) => theme.primaryText1};
  font-size: 16px;
  font-weight: 500;
  &:focus {
    box-shadow: 0 0 0 1pt
      ${({ theme, disabled }) => !disabled && darken(0.03, theme.primary5)};
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.03, theme.primary5)};
  }
  &:hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.03, theme.primary5)};
  }
  &:active {
    box-shadow: 0 0 0 1pt
      ${({ theme, disabled }) => !disabled && darken(0.05, theme.primary5)};
    background-color: ${({ theme, disabled }) =>
      !disabled && darken(0.05, theme.primary5)};
  }
  :disabled {
    opacity: 0.4;
    :hover {
      cursor: auto;
      background-color: ${({ theme }) => theme.primary5};
      box-shadow: none;
      border: 1px solid transparent;
      outline: none;
    }
  }
`;