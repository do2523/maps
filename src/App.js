import 'leaflet/dist/leaflet.css';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet"; //divIcon is for cluster
import MarkerClusterGroup from 'react-leaflet-cluster';
// import { Marker as MarkerLeaflet,icon}, { popup } from "leaflet"; We want it to come from react-leaflet



function App() {

    {/*Marker Coordinates*/}
    const markers = [
      {
        geocode: [28.6024, -81.2001],
        popUp: "HOME OF THE KNIGHTS!!!!!!!!"
      },
      {
        geocode: [28.4449, -81.4590],
        popUp: "LOCKHEED MARTIN"
      }
    ];

    {/*Cluster Icon*/}
    const createCustomClusterIcon = (cluster) => {
      return new divIcon({
        html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
        className: "custom-marker-cluster",
        iconSize: point(33, 33, true)
      })
    }
    
    {/*Marker Icon*/}
    const customIcon = new Icon({
      iconUrl: "maps-and-flags.png", // require('') works to if your having issues rendering
      iconSize: [38, 38],
	  	iconAnchor: [12, 24],
    })

  return (
    <>
    {/*Inline CSS for Map*/}
    <MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Cool Map */}
      <TileLayer
      attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
      url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
      />

      {/* Loop that iterates through marker and renders each coordinates along with popup */}
      <MarkerClusterGroup chunkedLoading iconCreateFunction={createCustomClusterIcon}>
      {markers.map(i => (
        <Marker position={i.geocode} icon={customIcon}>
        <Popup><h2>{i.popUp}</h2></Popup>
      </Marker>
      ))}
      </MarkerClusterGroup>

    </MapContainer>
      </>
  );
}

export default App;
