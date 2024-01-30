import React from "react";
import map from "./MapComponent.module.css";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  LocationMarker,
} from "react-leaflet";

const MapComponent = (props) => {
  const currentGym = useSelector((state) => state.gymReducer.currentGym);
  // const position = [50.005825752346475, 36.22919766080642];
  // const position1 = [50.07, 36.229];

  // let arrayCoordinates = [
  //   [50.006, 36.229],
  //   [50.006, 36.25],
  //   [50.006, 36.27],
  //   [50.006, 36.3],
  // ];
  //
  // PROPS !!! -------------------------------------------
  // arrayCoordinates={[element.coordinates]}
  // center={element.coordinates}
  // zoom={12}
  // borderRadius={"50px"}
  // -----------------------------------------------------

  return (
    <div className={map.map}>
      <MapContainer
        style={{ borderRadius: props.borderRadius ? props.borderRadius : "" }}
        className={map.leafletContainer}
        center={props.center}
        zoom={props.zoom}
        scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {props.arrayCoordinates.map((element) => {
          return <Marker position={element}></Marker>;
        })}
        {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
