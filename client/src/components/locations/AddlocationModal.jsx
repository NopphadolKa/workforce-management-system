import { useState } from "react";
import useDutyStore from "../../store/useDutyStore";

const AddlocationModal = ({ lat, lng, setAdding, setPending }) => {
  const [name, setName] = useState("");

  const addLocation = useDutyStore((s) => s.addLocation);

  const hdlAddlocation = async () => {
    await addLocation(lat, lng, name);
    setAdding(false);
    setPending(null);
  };

  const hdlCancel = () => {
    setAdding(false);
    setPending(null);
  };

  return (
    // inset-0 คือ top:0, bottom:0, left:0, right:0
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-2kl shadow-2xl w-96">
        <h3 className="text-xl text-gray-500 mb-2">เพิ่มจุดเข้าเวร</h3>

        <div className="text-xs text-gray-500 mb-2">
          Lat:{lat.toFixed(6)}, Lag: {lng.toFixed(6)}
        </div>

        <input
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-md w-full px-4 py-2
        mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500
        "
          type="text"
          placeholder="Input Name"
          autoFocus
        />

        <div className="flex gap-4">
          <button
            className="flex-1 bg-purple-600 text-white py-3
          rounded-md hover:bg-purple-700 disabled:cursor-not-allowed"
            onClick={hdlAddlocation}
            disabled={!name.trim()}
          >
            Save
          </button>
          <button
            className="flex-1 bg-gray-300 rounded-md 
          hover:bg-gray-400"
            onClick={hdlCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddlocationModal;
