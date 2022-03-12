import React from 'react'
import { Button } from 'react-bootstrap';

export const RowTicket = ({ id, description,price, quantity, addTicketQuantity, substractTicketQuantity}) => {
  return (
     <>
     <tr>
         <td>{description}</td>
         <td className='text-center'>
             <Button className='btn-primary'
              onClick={() => substractTicketQuantity(id)}
             >-</Button>
             <span>{quantity}</span>
             <Button 
              onClick={() =>  addTicketQuantity(id)}
              className='btn btn-secondary'>
                 +
             </Button>
         </td>
         <td>{price}</td>
     </tr>
     </>
  )
}

export default RowTicket;