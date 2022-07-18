import { QueryClientProvider, QueryClient ,} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";


const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <h1>Infinite SWAPI</h1>
      <InfinitePeople/>
      {/* <InfiniteSpecies /> */}
    </div>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
