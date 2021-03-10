import { EnumType } from "typescript";

export interface iPerson{
    id: number,
    name: string,
    lastname : string,
    photo : string,
    description : string,
    found: boolean,
    contactTelephone: string,
    contactName: string,
    contactEmail : string,
    lastSeen: string,
    height?: number,
    gender: string,
    zone: string,
    coords: string,
    birthday: string
}

export type iPeople = Array<iPerson>;