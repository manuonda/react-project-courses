import {IProduct} from "./IProduct";

export interface IUser {
  _id: string;
  name: string;
  points: number;
  createDate: Date;
  redeemHistory: IProduct[];
}
