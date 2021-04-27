import { useEffect, useState, useCallback } from "react";
import { API } from "../Api";

type Generic = {
    data: [];
    fetching: boolean;
}

export const useGet = (endpoint: any, initialState = {}) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState<boolean>(true);

  useEffect(() => {    
     get();
  },[endpoint]);

  const get = async () => {
    try {
        const { data} = await API.get(endpoint);
        setFetching(false);
        setData(data);
    } catch (error) {
        setFetching(false);
    }
  };

  return [data, fetching];
};
