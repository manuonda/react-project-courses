import { useQuery } from '@tanstack/react-query'
import api from "../api/github"
import { Repository } from '../types/Repository';

const fetchRepos = async () => {
   const { data } = await api.get<Repository[]>('/users/fazt/repos');
   return data;
}
export const useFetchRepository = () => {
   return useQuery(['repos'], fetchRepos)
}