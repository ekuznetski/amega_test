import { PropsWithChildren } from "react";
import styled from "styled-components";
import { borderRadius, colors } from "../../styles.ts";

const StyledError = styled.div`
  width: fit-content;
  padding: 10px 20px;
  border-radius: ${borderRadius};
  background-color: ${colors.error};
`;

export function Error({ children }: PropsWithChildren) {
  return <StyledError>{children}</StyledError>;
}
