import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";
import { borderRadius, colors } from "../../styles.ts";

const StyledButton = styled.button`
  background-color: ${colors.bgColor};
  color: ${colors.primaryColor};
  border-radius: ${borderRadius};
  border: none;
  padding: 10px 15px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.bgHoverColor};
  }
  &:focus {
    background-color: ${colors.bgFocusColor};
  }
`;

export function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
