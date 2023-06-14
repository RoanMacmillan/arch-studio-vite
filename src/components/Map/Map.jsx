import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';

function MapComponent({ targetLocation }) {
  const defaultCenter = [37.7749, -122.4194]; // Default position coordinates (San Francisco)
  const center = targetLocation || defaultCenter; // Use targetLocation if provided, otherwise use the default

  // Generate a unique key for the MapContainer based on the targetLocation
  const mapKey = targetLocation ? targetLocation.join("_") : "default";

  return (
    <MapContainer key={mapKey} center={center} zoom={7} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default MapComponent;
