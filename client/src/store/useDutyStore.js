import { create } from "zustand";
import { api } from "../lib/api";

const dutyStore = (set) => ({
  personnel: [],
  locations: [],
  assignments: [],
  selectedLocationId: null,

  fetchAll: async () => {
    try{
        const personnel = await api.get('/personnel')
        // console.log('This is personnel in Zustand',personnel)
        const locations = await api.get('/locations')
        set({
            personnel:personnel,
            locations:locations
        })
    }catch(err){
        console.log(err)
    }
  },
});

const useDutyStore = create(dutyStore);

export default useDutyStore;
