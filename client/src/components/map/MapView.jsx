import { MapContainer, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";

const ClickToAdd = ({ adding, onPick }) => {
  useMapEvent({
    click(e) {
      // shortcut การเขียนเงื่อนไข
      if (adding) onPick(e.latlng.lat, e.latlng.lng);
    },
  });
  return;
};

const MapView = ({ adding, onPick }) => {
  // console.log("MapView adding:", adding);
  const center = [13, 100];

  return (
    <div className="flex-1">
      <MapContainer
        className="h-full"
        center={center}
        zoom={7}
        scrollWheelZoom={true}
      >
        <Layers />
        {/* รับมาจาก App.jsx ส่ง props ไปให้ ClickToAdd  */}
        <ClickToAdd adding={adding} onPick={onPick} />
      </MapContainer>
    </div>
  );
};
export default MapView;
