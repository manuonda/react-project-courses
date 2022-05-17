import { useRouter } from "next/router";

const Description = () => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <p>Descripcion de pokemones</p>
    </>
  );
};

export default Description;
