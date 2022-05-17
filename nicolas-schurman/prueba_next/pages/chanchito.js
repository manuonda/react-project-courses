import Link from 'next/link';

const Chanchito = () => {
    return ( 
        <>
      <p> Chanchito Feliz </p> 
       <Link href="/">Inicio</Link>
       <br></br>
       <Link href="/chanchitos">Ir a Carpeta Chanchitos</Link>
     
       </>  
    );
}

export default Chanchito;