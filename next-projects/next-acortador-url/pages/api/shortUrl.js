
import { PrismaClient } from '@prisma/client'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
const prisma = new PrismaClient()

export default async(req, res)  => {
  const {url} = req.body;
  const shortUrl = Math.random().toString(36).substr(2,5);
  try {
       const data = await prisma.link.create({ data: {
            url,
            shortUrl }});

      return res.status(200).send(data);     

  } catch (error) {
    return res.status(500).send({error});
  }
  res.status(200).send({
    url, shortUrl
  });
}