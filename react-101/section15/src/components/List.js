import React from 'react'
import styled from 'styled-components'
import  axiosData from '../hookcomponents/axiosData'

const List = () => {
    const[data, fetching, error] = axiosData('pokemon?limit=100&offset=200')

    console.log(data, fetching, error);
    return (
        <>

        </>
    )
}
export default List;
