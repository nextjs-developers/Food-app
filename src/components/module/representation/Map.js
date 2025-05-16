"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/images/marker-icon-2x.png",
  iconUrl: "/leaflet/images/marker-icon.png",
  shadowUrl: "/leaflet/images/marker-shadow.png",
});

function ClickHandler({ addressHandler }) {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [address, setAddress] = useState("");

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setMarkerPosition([lat, lng]);

      const res = await fetch(
        ` https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      const displayAddress = data.display_name;
      setAddress(displayAddress);

      addressHandler?.({ lat, lng, address: displayAddress });
    },
  });

  return markerPosition ? (
    <Marker position={markerPosition}>
      <Popup>{address || "Getting Address ..."}</Popup>
    </Marker>
  ) : null;
}

export default function Map({ addressHandler }) {
  const position = [35.6892, 51.389];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "156px",
        width: "100%",
        border: "1px solid #CBCBCB",
        borderRadius: "4px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickHandler addressHandler={addressHandler} />
    </MapContainer>
  );
}
