import { useState } from "react";
import styled from "styled-components";
import { useIPDetails } from "../../hooks/useIPDetails.ts";
import { Info } from "../core/Info.tsx";
import { IpForm } from "../core/IpForm.tsx";
import { Map } from "../core/Map.tsx";

const StyledPageWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

const StyledMapWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
`;

const StyleInfoAndInputWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  gap: 15px;
  top: 5vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;

export function Home() {
  const [value, setValue] = useState<string>("");

  const { data: ipDetails, isLoading } = useIPDetails(value);
  const isError = (!isLoading && !ipDetails) || ipDetails?.success === false;

  function changeHandler(e: string) {
    setValue(e);
  }

  return (
    <StyledPageWrapper>
      <StyleInfoAndInputWrapper>
        <IpForm value={ipDetails?.ip ?? ""} onSubmit={changeHandler} />
        <Info ipDetails={ipDetails} isLoading={isLoading} isError={isError} />
      </StyleInfoAndInputWrapper>
      <StyledMapWrapper>
        <Map
          lat={ipDetails?.latitude ?? 0}
          lng={ipDetails?.longitude ?? 0}
          isLoading={isLoading}
        />
      </StyledMapWrapper>
    </StyledPageWrapper>
  );
}
