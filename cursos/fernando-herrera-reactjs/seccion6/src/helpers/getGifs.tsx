import { GifSharp } from "@material-ui/icons";
import { Gif } from "../types";

export const loadData = async (category:string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ig8fxL8BFmhSxgFTJY7oasonZTQjpYlF&q=${encodeURI(category)}&limit=25&offset=0&rating=g&lang=en`

    try{
       const response:any = await fetch(url);
       const data: any = await response.json();
       const gifs = data.data as Gif[];
       console.log(gifs);
       return gifs; 
    }catch(error) {
      console.error(error);
      return error;
    }
}