import { useRouter } from "next/router";

const Index = () => {
   
    const router = useRouter();
    console.log(router);
    return(<>
        <p>Soy el index</p>
      </>)
}

export default Index;