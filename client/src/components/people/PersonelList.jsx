import useDutyStore from "../../store/useDutyStore";

const PersonelList = () => {
  // Zustand
  const personnel = useDutyStore((state)=>state.personnel)
  console.log(personnel)


  return <div className="w-80 bg-white overflow-y-auto">PersonelList</div>;
};
export default PersonelList;
