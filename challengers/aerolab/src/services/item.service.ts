import { Item } from "../models";


const MOCK: Item[] = [
    {
     id:1,
     text: "prueba1"
    },{
      id:2,
      text: "prueba2"
    },{
      id:3,
      text: "prueba3"
    }
];

export default {
    list: ():Promise<Item[]>  => Promise.resolve(MOCK),
    create: (text:Item['text']):Promise<Item> => Promise.resolve({ id: +new Date(),text}),
    remove: (id: Item['id']):Promise<Item['id']> => Promise.resolve(id)
} 