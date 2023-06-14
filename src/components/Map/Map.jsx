import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function MapComponent({ targetLocation, zoomLevel }) {

  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41], // size of the icon
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
    shadowSize: [41, 41] // size of the shadow
});

L.Marker.prototype.options.icon = DefaultIcon;

  const defaultCenter = [37.7749, -122.4194]; // Default position coordinates (San Francisco)
  const center = targetLocation || defaultCenter; // Use targetLocation if provided, otherwise use the default

  // Generate a unique key for the MapContainer based on the targetLocation
  const mapKey = targetLocation ? targetLocation.join("_") : "default";

  return (
    <MapContainer key={mapKey} center={center} zoom={zoomLevel} className={styles.mapContainer}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {targetLocation && <Marker position={targetLocation} />}
    </MapContainer>
  );
}

export default MapComponent;
