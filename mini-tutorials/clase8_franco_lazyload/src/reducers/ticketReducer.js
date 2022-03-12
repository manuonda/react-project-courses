import { ADD_QUANTITY, SET_TICKETS, SUBSTRACT_QUANTITY } from "../actions/tickets"
import TableTickets from "../pages/Tickets/components/TableTickets";


export const initialState = {
    tickets:[],
    total: 0
}



const getTotal = (tickets) => {
    let total = tickets.map (ticket => +ticket.quantity * +ticket.price).reduce((prev, current) => prev + current , 0);
    return total;
  }

  
export const ticketReducter = (state = initialState, action) => {
    switch(action.type) {
        case SET_TICKETS: {
            return {
                tickets: action.payload.tickets,
                total: getTotal(state.tickets)
            }
        };
        case ADD_QUANTITY:{
           const newTickets = state.tickets.map(ticket => {
                if ( ticket.id === action.payload.id) {
                    return {
                        ...ticket,
                        quantity : ticket.quantity + 1,
                    }
                } 
                return ticket
            });
            
            return  {
                ...state,
                tickets: newTickets,
                total: getTotal(newTickets)
            }
        };
        case SUBSTRACT_QUANTITY : {
            const newTickets = state.tickets.map ( ticket => {
                if ( ticket.id === action.payload.id) {
                    return {
                       ...ticket,
                       quantity: ticket.quantity - 1 
                    }
                }
                return ticket;
            }) 

            return {
                ...state,
                tickets: newTickets,
                total: getTotal(state.tickets)
            }
        };

        default: return state;
    }

}

