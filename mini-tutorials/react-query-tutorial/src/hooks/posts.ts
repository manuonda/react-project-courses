import { useMutation, useQueryClient } from "react-query";
import { createNewPost } from "../api/posts";

const key  = "posts";

const queryClient = useQueryClient();
export function useMutatePost() {
    return useMutation(createNewPost,{
        onSuccess:(post) => {
          queryClient.setQueryData([key],(prevPosts:any) => prevPosts.concat(post) ) // permite guardar el dato 
          queryClient.invalidateQueries([key]) //revalidacion de los datos
        }
      });
}