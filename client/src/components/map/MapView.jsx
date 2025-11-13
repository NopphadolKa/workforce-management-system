import {
  MapContainer,
  Marker,
  Popup,
  Tooltip,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Layers from "./Layers";
import useDutyStore from "./../../store/useDutyStore";

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
  const locations = useDutyStore((s) => s.locations);
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

        {locations.map((item) => {
          return (
            <Marker key={item.id} position={[item.lat, item.lng]}>
              <Popup>
                <div className="text-sm">{item.name}</div>
                <div className="text-sm text-gray-500">{item.lat}</div>
              </Popup>
              <Tooltip direction="center">
                <div className="text-sm">{item.name}</div>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
export default MapView;
