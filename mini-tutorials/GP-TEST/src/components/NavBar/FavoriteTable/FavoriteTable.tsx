import { Person } from '@/models';
import { addFavorites, removeFavorite } from '@/redux/state';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
	
    const pageSize = 5;
   
    const dispatch = useDispatch()

    const findPerson = (person: Person) => !!selectedFavorite.find(p => p.id === person.id);
    const filterPerson = (person: Person) => selectedFavorite.filter(p => p.id !== person.id);
     
    const stateFavorites = useSelector((store :AppStore) => store.favorites);
	const [selectedFavorite, setSelectedFavorite] = useState<Person[]>(stateFavorites); 

   
   const handleRemoveFavorite = (person: Person)  => {
	const findFavorite =  selectedFavorite.find( (x:Person) => x.id === person.id); 
	dispatch(removeFavorite(findFavorite));
	setSelectedFavorite(filterPerson(person));
  }

  const columns = [{
	   field: 'actions',
	   type: 'actions',
	   sortable: false,
	   headerName: '',
	   flex: 1,
	   width: 50,
	   renderCell: (params: GridRenderCellParams) => <>{
		   <IconButton color="secondary" aria-label="favorites" 
			 component="label" onClick={() => handleRemoveFavorite(params.row)}>
			<Delete></Delete>	
		   </IconButton>

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
             rows={stateFavorites}
             disableColumnSelector
             disableSelectionOnClick
             autoHeight
             pageSize={pageSize}
             rowsPerPageOptions={[pageSize]}
             getRowId={(row: any) => row.id}
        />
   );
};

export default FavoriteTable;

