import { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { borderRadius, colors } from "../../styles.ts";

const StyledInput = styled.input`
  padding: 10px 15px;
  color: ${colors.primary};
  background-color: ${colors.bg};
  border: none;
  border-radius: ${borderRadius};
  font-size: 16px;
  &:hover {
    background-color: ${colors.bgHover};
  }
  &:focus {
    background-color: ${colors.bgFocus};
  }
`;

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

Input.displayName = "Input";
