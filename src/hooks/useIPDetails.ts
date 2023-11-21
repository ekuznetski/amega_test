import { useQuery } from "@tanstack/react-query";
import { IpDetails } from "../domain/interfaces/ipDetails.ts";
import { request } from "../utils/request.ts";

export function useIPDetails(ip?: string) {
  return useQuery<IpDetails, Error>({
    queryKey: ["ipDetails", ip],
    queryFn: () => request<IpDetails>(`https://ipwho.is/${ip ?? ""}`),
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
