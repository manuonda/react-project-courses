// el archivo types.td.ts solamente puede tener definitions
// td: types definitions
export interface Sub {
    nick: string,
    avatar: string,
    subMonths: number,
    description?: string
}

export type SubsResponseFromApi  = Array<{
  nick:string,
  months: number,
  profileUrl: string,
  description: string
}>;




