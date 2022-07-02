import axios from "axios";

const API = "http://localhost:3005";

export const getAll = async () => {
  try {
    const { data } = await axios.get(`${API}/posts`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostById = async(id:number) => {
    try {
      const { data } = await axios.get(`${API}/posts/${id}`);
      return data;
    } catch (error) {
      return error;
    }
}


export const createNewPost = async (post: any) => {
   const {data} = await axios.post(`${API}/posts`, post);
   return data;
}
