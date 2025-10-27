import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
  // Zustand
  const kaika = useDutyStore((state)=>state.kaika)
  console.log(kaika)


  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};
export default PersonelList;
