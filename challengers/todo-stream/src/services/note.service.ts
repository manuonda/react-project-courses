import { Note } from "../types";

const NOTAS:Array<Note> = [
      { id:1,
        title: 'title1',
        lastEdit: "10/10/2022",
        archived: true,
        content: 'Contenido numero 1',
        categories: ["category1"]
      },
      { id:2,
        title: 'title 2 ',
        lastEdit: "10/10/2022",
        archived: true,
        content: 'Contenido numero 2',
        categories: ["category2"]
      }
      
];


const list = (): Note[]  =>  {
  try {
    const todos =  JSON.parse(localStorage.getItem('todos') || "[]" );
    return  todos; 
  } catch (error) {
    return [];
  }    
}

const set = (notes:Note[]) => {
    console.log('notes todos: ', notes);
    localStorage.setItem('todos', JSON.stringify(notes));
}

export default {
     list,
     set
}