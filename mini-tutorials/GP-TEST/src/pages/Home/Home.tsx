import React, { useState } from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';


export interface HomeInterface { }

const Home: React.FC<HomeInterface> = () => {


     const pageSize = 5;
     const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

     const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
     const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);

     // checked :person not exist  
     const handleChange = (person: Person) => {
          setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person]);
     }

     const columns = [{
          field: 'actions',
          type: 'actions',
          sortable: false,
          headerName: '',
          flex: 1,
          width: 50,
          renderCell: (params: GridRenderCellParams) => <>{
               <Checkbox size='small'
                    onChange={() => handleChange(params.row)}
                    checked={findPerson(params.row)} />

          }</>
     },
     {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
     }, {
          field: 'category',
          headerName: 'Category',
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
     }, {
          field: 'company',
          headerName: 'Company',
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
     }
     ];

     return (
          <DataGrid
               columns={columns}
               rows={People}
               disableColumnSelector
               disableSelectionOnClick
               autoHeight
               pageSize={pageSize}
               rowsPerPageOptions={[pageSize]}
               getRowId={(row: any) => row.id}
          />
     );
}
export default Home;
