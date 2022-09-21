import { People } from '@/data';
import { addPeople } from '@/redux/state';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components';


export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {

     const dispatch = useDispatch();
     useEffect(() => {
        dispatch(addPeople(People));
     },[]);

     return(
          <PeopleTable></PeopleTable>
     )

}
export default Home;
