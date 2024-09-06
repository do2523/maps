import 'leaflet/dist/leaflet.css';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  return (
    <MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       <Marker position={[28.5384, -81.3789]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    </MapContainer>
  );
}

export default App;
