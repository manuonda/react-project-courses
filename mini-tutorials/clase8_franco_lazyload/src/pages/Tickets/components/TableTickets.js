import { lazy , useReducer, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { ticketReducter ,initialState } from '../../../reducers/ticketReducer';
import { ADD_QUANTITY, SET_TICKETS, SUBSTRACT_QUANTITY } from '../../../actions/tickets';


const RowTickets = lazy(() => import('./RowTicket'))

const TableTickets = ({ tickets }) => {

  const [state, dispatch] = useReducer(ticketReducter, initialState);
  console.log(state, dispatch);
  useEffect(() => {
    console.log('effect table tickets');
     dispatch({ type: SET_TICKETS , payload:{tickets}});
  }, [tickets])
  
  const addTicketQuantity = (id) => {
     dispatch({type: ADD_QUANTITY , payload: {id} });
  }

  const substractTicketQuantity = (id) => {
    dispatch({type : SUBSTRACT_QUANTITY , payload : {id} });
  }


  return (
    <>
    <Table>
        <thead>
          <tr>
            <th className='text-center'>Tickets</th>
            <th className='text-center'>Cantidad</th>
            <th className='text-center'>Precio</th>
          </tr>
            
        </thead>
        <tbody>
          { state.tickets?.length > 0 && state.tickets.map(ticket => (
            <RowTickets key={ticket.id} {...ticket} 
              addTicketQuantity={addTicketQuantity}
              substractTicketQuantity={substractTicketQuantity}
            ></RowTickets>
          ))}
            
        </tbody>
    </Table>

    <div className='row'>
      <div className='col-md-3'>
        <h3>Total : <span>{state.total}</span></h3>
      </div>
    </div>
    </>
  )

}

export default TableTickets;
