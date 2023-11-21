import styled from "styled-components";
import { IpDetails } from "../../domain/interfaces/ipDetails.ts";
import { borderRadius, colors } from "../../styles.ts";
import { Loading } from "../shared/Loading.tsx";
import { Error } from "../shared/Error.tsx";

export interface InfoProps {
  ipDetails?: IpDetails;
  isLoading: boolean;
  isError: boolean;
}

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 1000px;
  max-width: 90vw;
  background-color: ${colors.bg};
  > *:not(:first-child) {
    border-left: 1px solid ${colors.secondary};
    padding-left: 20px;
  }
  padding: 20px 10px;
  border-radius: ${borderRadius};
`;
const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const H4 = styled.h4`
  font-size: 12px;
  margin-bottom: 5px;
`;

const InfoBlockValue = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export function Info({ ipDetails, isLoading, isError }: InfoProps) {
  const displayValue = (value?: string) => value ?? "-";
  return (
    <>
      <StyledInfo>
        <InfoBlock>
          <H4>IP ADDRESS</H4>
          <InfoBlockValue>{displayValue(ipDetails?.ip)}</InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <H4>LOCATION</H4>
          <InfoBlockValue>
            {displayValue(ipDetails?.city)}, {displayValue(ipDetails?.country)}
          </InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <H4>TIMEZONE</H4>
          <InfoBlockValue>
            UTC {displayValue(ipDetails?.timezone?.utc)}
          </InfoBlockValue>
        </InfoBlock>
        <InfoBlock>
          <H4>ISP</H4>
          <InfoBlockValue>
            {displayValue(ipDetails?.connection?.isp)}
          </InfoBlockValue>
        </InfoBlock>
      </StyledInfo>
      {isLoading && <Loading />}
      {isError && <Error>Invalid IP</Error>}
    </>
  );
}
