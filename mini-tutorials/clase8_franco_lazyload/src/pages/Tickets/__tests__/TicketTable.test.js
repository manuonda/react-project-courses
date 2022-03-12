import {render } from '@testing-library/react'
import TableTickets from '../components/TableTickets';

import { tickets } from '../../../mocks/Tickets'
 
describe('TicketTable', () => { 
     
      test("TicketTable should render properly", () => {
           render( <TableTickets tickets={tickets} />)
      });

 })