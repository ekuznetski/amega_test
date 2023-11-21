import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import styled from "styled-components";

interface MapProps {
  lat: number;
  lng: number;
  isLoading: boolean;
}

const StyledMapContainer = styled(MapContainer)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export function Map({ lat, lng, isLoading }: MapProps) {
  const [map, setMap] = useState<LeafletMap | null>(null);

  useEffect(() => {
    if (!isLoading && map) {
      map.flyTo({ lat, lng }, map.getZoom());
    }
  }, [lat, lng, isLoading, map]);

  return (
    <StyledMapContainer
      center={{ lat, lng }}
      zoom={13}
      scrollWheelZoom={true}
      ref={setMap}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={{ lat, lng }}>
        <Popup>You are here</Popup>
      </Marker>
    </StyledMapContainer>
  );
}
