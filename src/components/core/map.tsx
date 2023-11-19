import { useEffect, useState } from "react";
import { Map as IMap } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

interface MapProps {
  lat: number;
  lng: number;
}

export function Map({ lat, lng }: MapProps) {
  const [map, setMap] = useState<IMap | null>(null);
  useEffect(() => {
    if (lat && lng) {
      map?.flyTo({ lat, lng }, map?.getZoom());
    }
  }, [lat, lng]);
  return (
    <MapContainer
      center={{ lat, lng }}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "800px" }}
      ref={setMap}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={{ lat, lng }}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
}
