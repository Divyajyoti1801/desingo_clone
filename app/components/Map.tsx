"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface MapProps {
  center?: number[];
}

const url = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
const attribution = "© OpenStreetMap contributors";

const Map: React.FC<MapProps> = ({ center }) => {
  return (
    <MapContainer
      center={(center as L.LatLngExpression) || [51.505, -0.09]}
      zoom={center ? 3 : 2}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer attribution={attribution} url={url} />
    </MapContainer>
  );
};

export default Map;
