import {useState} from 'react';

const Contador = ({ inicial }) => {
    const[contador, setContador ] = useState(inicial);
    const incrementar = () => {
        console.log('incrementar');
        contador = contador +1 ;
        console.log('contador : '+ contador);
        setContador(contador );
    }

    return [contador, incrementar];
}

export default Contador;