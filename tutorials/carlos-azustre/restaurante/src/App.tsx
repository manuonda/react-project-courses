import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Switch } from 'wouter';
import HotelList from './components/HotelList';
import { HotelDetails }  from './components/HotelDetails' ;
import { Toaster } from 'react-hot-toast';

const client = new QueryClient();

function App() {


  return (
   <>
   <Toaster position="top-left" reverseOrder={false} />
     <QueryClientProvider client={client}>
       <Switch>
          <Route path='/' component={HotelList}></Route>  
          <Route path='/hotels/:id' component={HotelDetails} />
       </Switch>
     </QueryClientProvider>
   </>
  )
}

export default App
