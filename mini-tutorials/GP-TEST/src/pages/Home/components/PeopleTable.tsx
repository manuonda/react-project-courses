import { Person } from "@/models";
import { AppStore } from "@/redux/store";
import Checkbox from "@material-ui/core/Checkbox";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export interface InterfaPeopleTable {}


const PeopleTable : React.FC<InterfaPeopleTable>  = () => {
    

    const pageSize = 5;
    const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
    const dispatch = useDispatch()

    const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id);
     
    const statePeople = useSelector((store :AppStore) => store.people);

   
     // checked :person not exist  
     const handleChange = (person: Person) => {
        const filteredPerson = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
        dispatch(addFavorites(filteredPerson))
        setSelectedPeople(filteredPerson);
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
             rows={statePeople}
             disableColumnSelector
             disableSelectionOnClick
             autoHeight
             pageSize={pageSize}
             rowsPerPageOptions={[pageSize]}
             getRowId={(row: any) => row.id}
        />
   );
}


export default PeopleTable;