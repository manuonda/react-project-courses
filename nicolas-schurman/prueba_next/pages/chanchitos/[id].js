import { useRouter } from 'next/router';
import { useEffect, useState} from 'react';
import useIsMonted from '../../hooks/useIsMonted';
const ChanchitoDinamico = () => {
     const isMounted = useIsMonted();
     const router = useRouter();
     
     
     if ( !isMounted) {
         return null;
     }

    console.log({router}, router.query.id);

    return(
        <>
        <p>
            Chanchito dinamico
        </p>
        </>
        
    )
}

export default ChanchitoDinamico;