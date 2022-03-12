import {lazy } from 'react'

const TableTickets = lazy(() => import('../Tickets/components/TableTickets'));
const tickets = [
  {
    id:1,
    description :'Informacion numero 1',
    price : 700,
    quantity: 0
  },{
   
    id:2,
    description :'Informacion numero 2',
    price : 600,
    quantity: 0
  }
];



export const Tickets = () => {
  return (
    <>
    <h2>Tickets Table </h2>
    <TableTickets tickets={tickets}/>
    </>
  )
}

export default Tickets;
