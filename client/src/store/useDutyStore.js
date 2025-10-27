import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set) => ({
  personnel: [],
  location: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try{
        const personnel = await api.get('/personnel')
        // console.log('This is personnel in Zustand',personnel)
        set({
            personnel:personnel,
        })
    }catch(err){
        console.log(err)
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
