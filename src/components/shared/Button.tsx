import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { borderRadius, colors } from "../../styles.ts";

const StyledButton = styled.button`
  background-color: ${colors.bg};
  color: ${colors.primary};
  border-radius: ${borderRadius};
  border: none;
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.bgHover};
  }
  &:focus {
    background-color: ${colors.bgFocus};
  }
`;

export function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
