import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { GpsNotFixed, NoteAdd } from '@material-ui/icons';
import { Note } from './types';
import React from 'react';
import noteService from './services/note.service';
import { NoteCard } from './components/NoteCard';
import { NoteModal } from './components';




function App() {
  const [notes, setNotes] = React.useState<Note[]>(noteService.list());
  const [loading, setLoading] = React.useState<boolean>(true);
  const [draft,setDraft] =  React.useState< null | Partial<Note>>(null);
  const [view , setView] = React.useState<"active" | "archived">("active");
  
  const matches = useMemo(() => {
    console.log("userMemo");
    return notes.filter(note =>  {
      if ( view  === "active") {
        return !note.archived
      } else if ( view === "archived") {
        return note.archived;
      }
    })
  },[notes,view]);

  const handleDelete = (id: Note['id']): void => {
    setNotes((notes: Note[]) => notes.filter((note: Note) => note.id !== id));
  }

  const handleArchivo = (id: Note['id']): void => {
    setNotes((notes: Note[]) =>
      notes.map((note: Note) => {
        if (note.id !== id)
          return note;

        return {
          ...note,
          archived: !note.archived
        };
      })
    );
  }

  const handleDraftChange = (field: string, value:string) => {
     setDraft( draft => ({
        ...draft,
        [field] : value
     }))
  }

  const handleEdit = ( note: Note) => {
    setDraft(note);
  }

  const handleSave = () => {
     if(draft?.id) {
      // edit   
      setNotes((notes) => 
        notes.map((note:Note) =>  {

          if (note.id !== draft.id) return note;
          
          return  {
            ...draft,
            lastEdit: new Date().toString()
          } as Note;
        }))
     } else {
      //new 
      setNotes((notes) => 
         notes.concat({
          id: +new Date(),
          lastEdit: new Date().toString(),
          ...(draft as Omit<Note, "id" | "lastEdit">),
         }),
       );
     }

     setDraft(null);
  }


  useEffect(() => {
    // const cargarData = async () => {
    //   try {
    //     const resp = await noteService.list();
    //     setNotes(resp);
    //     setLoading(false);
    //   } catch (error) {
    //     setLoading(false);
    //   }
    // }
    // setTimeout(() => {
    //   cargarData();
    // }, 2000);

    console.log('notes : ', notes)
    noteService.set(notes);

  }, [notes])

  // if (loading) {
  //   return <>Loading...</>
  // }

  return (
    <div style={{ marginBottom: 24 }}>

      <h1>Mis Notas</h1>
      <div style={{display: 'flex' , gap: 24, justifyContent:'center'}}>
      <button className='nes-btn' onClick={() => setDraft({
        title:''
      })}>Crear Nota</button>
      <button className='nes-btn' onClick={() => setView((view) => (view  === "active" ? "archived" :"active"))}> 
       { view === "active" ? "Ver Archivadas": "Ver Activas"}
      </button>
      </div>
      
      <div style={{ 
        display: 'grid',
        alignItems: "center",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fill,minmax(480px, 1fr))"
      }}>
        {matches.length ? matches.map((note: Note) => (
          <NoteCard 
            onEdit={handleEdit}
            onArchive={handleArchivo}
            onDelete={handleDelete}
            key={note.id} note={note} />
        )) :
          <p>No hay Notas</p>
        }
      </div>
       {  draft && <NoteModal
          onSave={handleSave}
          onChange={handleDraftChange}
          note={draft}
          onClose={() => setDraft(null)}></NoteModal> }
    </div>
  )
}

export default App
