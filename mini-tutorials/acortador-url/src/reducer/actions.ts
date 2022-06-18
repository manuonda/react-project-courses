import { AcortadorUrl } from "../types";

export enum Actions { ADD, LOAD, REMOVE, CLEAR, LOAD_VIEW}

export type  ActionsAcortador =  {
   type: Actions.ADD,
   payload:string 
} | {
    type: Actions.LOAD
} | {
    type: Actions.LOAD_VIEW,
    payload: AcortadorUrl
}