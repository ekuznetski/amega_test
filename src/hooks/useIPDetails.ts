import axios from "axios";
import { useEffect, useState } from "react";
import { IpDetails } from "../domain/interfaces/ipDetails.ts";

export function useIPDetails(ip?: string): IpDetails | null {
  const [ipDetails, setIpDetails] = useState<IpDetails | null>(null);
  useEffect(() => {
    //todo move to request.ts
    axios.get<IpDetails>(`https://ipwho.is/${ip ?? ""}`).then((res) => {
      setIpDetails(res.data);
    });
  }, [ip]);
  return ipDetails;
}
