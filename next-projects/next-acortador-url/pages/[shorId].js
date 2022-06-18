import { prisma, PrismaClient } from "@prisma/client"

export default function ShortIdPage () {
   return(
       <>
       ShortId  Redirect
       </>
   )
}


export async function getServerSideProps({params}) {
    const client = new PrismaClient();
    const { shortId } = params;
    const data =  await prisma.link.findUnique({
       where: { shortUrl : shortId}
    })

    if ( !data) {
        return {
            redirect: {destination: '/'}
        }
    }
    return {
        redirect: { destination : data.url}
    }
}