import React from 'react'
import { useQuery } from 'react-query';
import * as api from "../api/api";

interface IProps {
    id: number
}

export const UserDetail = ({id}: IProps) => {
  const {data} = useQuery("users", api.getById(id));
  return (
    <div>UserDetail</div>
  )
}

export default UserDetail;
