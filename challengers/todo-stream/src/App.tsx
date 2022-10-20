import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NoteAdd } from '@material-ui/icons';
import { Note } from './types';
import React from 'react';
import noteService from './services/note.service';
import { NoteCard } from './components/NoteCard';


function NoteModal({ onClose }: NoteModalProps) {
  return (
    <section 
    style={{ width: '100vw', height: '100vw', position: 'fixed', top: 0, left: 0 }}
      className="nes-dialog" id="dialog-default">
        <div style={{ position:'absolute',
         display:'flex', alignItems:'center', justifyContent: 'center',
        backgroundColor: "rgba(0,0,0,0.2)" , width:'100%', height:'100%'}} />
      <form method="dialog" style={{backgroundColor: "white" , zIndex:1, padding:12 ,border:'5px solid black'}}>
        <p className="title">Dialog</p>
        <p>Alert: this is a dialog.</p>
        <menu className="dialog-menu">
          <button className="nes-btn" onClick={onClose}>Cancel</button>
          <button className="nes-btn is-primary">Confirm</button>
        </menu>
      </form>
    </section>

  )
}

function App() {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [dfaft,setDraft] =  React.useState< null | Partial<Note>>(null);


  type NoteModalProps = {
    note: Partial<Note>,
    onClose: VoidFunction
  }


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

  useEffect(() => {
    const cargarData = async () => {
      try {
        const resp = await noteService.list();
        setNotes(resp);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    setTimeout(() => {
      cargarData();
    }, 2000);

  }, [])

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div style={{ marginBottom: 24 }}>

      <h1>Mis Notas</h1>
      <button>Crear Nota</button>
      <div style={{
        display: 'grid',
        alignItems: "center",
        gap: 24,
        gridTemplateColumns: "repeat(auto-fill,minmax(480px, 1fr))"
      }}>
        {notes.map((note: Note) => (
          <NoteCard onArchive={handleArchivo}
            onDelete={handleDelete}
            key={note.id} note={note} />
        ))}
      </div>
       {  dfaft && <NoteModal note={draft} onClose></NoteModal>
    </div>
  )
}

export default App
