import React, { useMemo } from "react";
import styles from "./styles.module.scss";

import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

type MapProps = {
  apiKey: string;
};

export const MapEl: React.FC<MapProps> = ({ apiKey }) => {
  const center = {
    lat: -22.990901947021484,
    lng: -43.23163604736328,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) return <div>Carregando...</div>;
  return (
    <div className={styles.container}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={12}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: true,
          maxZoom: 18,
          minZoom: 10,
          clickableIcons: false,
          mapTypeId: "roadmap", // Changing to roadmap for normal view
        }}
      >
        {/* Adding a marker to the center */}
        <Marker
          position={center}
          title="Faro Beach Club"
          animation={window.google.maps.Animation.DROP}
        />
      </GoogleMap>
    </div>
  );
};
