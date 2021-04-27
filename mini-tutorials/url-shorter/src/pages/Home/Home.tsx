import React , {useEffect, useState} from 'react'

import { Container, Stack } from '@chakra-ui/react'


import FormCreate from './Components/FormCreate'
import Listado from './Components/Listado';

import {useGet} from '../../hooks/useGet'

const Home:React.FC = () => {
    const [urls, fetching ] = useGet("urls");
    const [pages, setPages] = useState<string[]>([]);

    useEffect(() => {
       setPages(pages);
    }, [pages])
    
    return (
        <>
        <Container>
            <Stack spacing="24px">
            <FormCreate></FormCreate>
            <Listado pages={pages}></Listado>
           </Stack>
        </Container>
        </>
    )
}
export default Home;