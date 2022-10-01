import {IUser} from "@/models";

export default {
  fetch: (): Promise<IUser> =>
    Promise.resolve({
      _id: "63375f3bd47a560021dd7784",
      name: "John Kite",
      points: 2000,
      createDate: "2022-09-30T21:27:23.187Z",
      redeemHistory: [],
      __v: 0,
    }),
  points: {
    add: (amount: number): Promise<number> => Promise.resolve(amount),
  },
};
