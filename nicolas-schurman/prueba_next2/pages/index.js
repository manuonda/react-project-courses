import  Link from 'next/link'



// permite indiicar a next de manera static
export const getStaticProps = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  
  return {
    props: { pokemones:  data.results}
  }
}
