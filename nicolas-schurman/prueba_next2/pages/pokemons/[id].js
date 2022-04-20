
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Pokemon = ({ data }) => {
    const router = useRouter();
    console.log(data);
    if ( router.isFallback) {
        return <p>Cargando...</p>
    }
    return(
        <>
        <h1>{data.name} numero #{data.id}</h1>
        <Image src={data.sprites.front_default} width={400} height={400} />
        <Link href="/">Volver Al Inicio</Link>
        </>
    )
}

export default Pokemon;

// desde el lado del servidor
export const getStaticProps = async({params}) => {
    console.log('params ',params.id);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
    const data = await response.json();

    return {
        props: {data}
    }
}

// metodo dinamico
export const getStaticPaths = async (props ) => {
   const paths = [
     { params : { id : '1'} }
   ]
    return {
      paths,
      fallback: true, // en false solamente para las rutas definidas
                      // 'blocking' :  no se pregunta sino esperar a que se renderice 
  }  
}

// desde el lado del servidor
// export const getServerSideProps = async({params}) => {
//     console.log('params ',params.id);
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
//     const data = await response.json();

//     return {
//         props: {data}
//     }
// }