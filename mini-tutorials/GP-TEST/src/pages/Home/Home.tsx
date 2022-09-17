import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { People } from '../../data/index';


export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
 

     const pageSize = 5;
     const columns =
     
     return ( <div>
         <DataGrid 
                rows={People}
                disableColumnSelector
                disableSelectionOnClick
                autoHeight
                pageSize={pageSize} 
                rowsPerPageOptions={[pageSize]}

          />
     </div>);
}
export default Home;
