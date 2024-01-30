import React from "react";
import blogP from "./BlogPage.module.css";
import BlackLine from "../DopComponents/BlackLine/BlackLine";
import { stateConst } from "../../../../BusinesaLogik/State/StateConst";

// import { MapContainer, TileLayer } from "react-leaflet";
// import { MapContainer } from "https://cdn.esm.sh/react-leaflet/MapContainer";
// import { TileLayer } from "https://cdn.esm.sh/react-leaflet/TileLayer";
// import { useMap } from "https://cdn.esm.sh/react-leaflet/hooks";
//
// import {
//   MapContainer,
//   TileLayer,
//   useMap,
// } from "https://cdn.esm.sh/react-leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LocationMarker,
} from "react-leaflet";
import L from "leaflet";

const BlogPage = () => {
  // const position = [51.505, -0.09];
  // const position = [49.977, 36.362];
  const position = [50.005825752346475, 36.22919766080642];

  return (
    <div className={blogP.map}>
      <MapContainer
        className={blogP.leafletContainer}
        center={position}
        zoom={12}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

// let DefaultIcon = L.icon({
//   // iconUrl: <img src={stateConst.stateImage.clock} />,
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/25/25613.png",
//   // "https://unpkg.com/leaflet@1.6/dist/images/icon-marker.png"
// });
// L.Marker.prototype.options.icon = DefaultIcon;

export default BlogPage;
