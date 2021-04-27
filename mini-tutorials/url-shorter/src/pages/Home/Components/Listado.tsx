import React ,{memo} from 'react';
import {Grid, Stack } from '@chakra-ui/react'
import Item from './Item';

type Props = {
    pages: string[];
}

const Listado:React.FC<Props> = ({pages}) => {
    return(
        <>
        <Stack>
         <Grid gridGap="6">
           {pages && pages.map((page:string) => (
             <Item page={page}></Item>
           ))}
         </Grid>  
        </Stack>
        </>
    )
}

export default React.memo(Listado);