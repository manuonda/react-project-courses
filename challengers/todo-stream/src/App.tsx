import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NoteAdd } from '@material-ui/icons';
import { Note } from './types';
import React from 'react';
import noteService from './services/note.service';
import { NoteCard } from './components/NoteCard';

function App() {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);


  type NoteModalProps = {
    note: Partial<Note>
  }

  function NoteModal({ }: NoteModalProps) {
    return (
      <section style={{ width: '100vw', height: '100vw', position: 'fixed', top: 0, left: 0 }}
        className="nes-dialog" id="dialog-default">
          <div style={{ backgroundColor: "rgba(0,0,0,0.2)"}} />
        <form method="dialog">
          <p className="title">Dialog</p>
          <p>Alert: this is a dialog.</p>
          <menu className="dialog-menu">
            <button className="nes-btn">Cancel</button>
            <button className="nes-btn is-primary">Confirm</button>
          </menu>
        </form>
      </section>

    )
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
      <NoteModal note={{}}></NoteModal>
    </div>
  )
}

export default App
