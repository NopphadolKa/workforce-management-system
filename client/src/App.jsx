import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import LocationList from "./components/locations/LocationList";
import MapView from "./components/map/MapView";
import PersonelList from "./components/people/PersonelList";
import useDutyStore from "./store/useDutyStore";
import AddlocationModal from "./components/locations/AddlocationModal";

const App = () => {
  const [adding, setAdding] = useState(false);
  const [pending, setPending] = useState(null);

  const fetchAll = useDutyStore((state) => state.fetchAll);
  useEffect(() => {
    fetchAll();
  }, []);

  // เก็บ ลติจูด ลองจิจูด ที่เลือกจากแผนที่
  const onPick = (lat, lng) => {
    //  console.log("Picked location:", lat, lng);
    // setPending({
    //   lat:lat,
    //    lng:lng });
    setPending({ lat, lng }); //ย่อรูปแบบการเขียน
  };
  // console.log(pending)

  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />
      <div className="flex flex-col flex-1">
        <Header adding={adding} setAdding={setAdding} />
        <div className="flex flex-1 overflow-hidden">
          <MapView adding={adding} onPick={onPick} />
          <LocationList />
        </div>
      </div>

      {pending && (
        <AddlocationModal
          lat={pending.lat}
          lng={pending.lng}
          setAdding={setAdding}
          setPending={setPending}
        />
      )}
    </div>
  );
};
export default App;
