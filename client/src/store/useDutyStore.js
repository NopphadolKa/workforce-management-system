import { create } from "zustand";

const dutyStore = () => ({
  peesonel: [],
  location:[],
  assignments:[],
  selectedLocationId:null,
  

//   kaika: "Big",
//   jukkru: () => console.log("Jukkru!!!"),
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
