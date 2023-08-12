import { create } from "zustand";
import { Hotel} from  './types/hotel'

export type Store = {
    reservations: Array<Hotel>;
    addReservation: (hotel:any, dates:any) => void;
}

const useStore = create<Store>((set) => ({
    reservations: [],
    addReservation: (hotel,dates) => {
        set((state:any) => ({
             reservations: [...state.reservations , { hotel,dates}]
        }))
    }
}));
export default useStore;