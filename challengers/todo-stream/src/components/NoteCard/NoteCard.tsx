import React from 'react';
import { Note } from '../../types';
export interface NoteCardProps{
	note: Note,
	onArchive : (id:Note['id']) => void ,
	onDelete: (id:Note['id']) => void,
}
  

const NoteCard : React.FC<NoteCardProps> = ({note,onArchive,onDelete}:NoteCardProps) => {
	return (
		<div className="nes-container with-title is-centered">
		  <div>
			<h3>{note.id}</h3>
			<h3>{note.title}</h3>
		  </div>
		  <div 
			style={{ display: "flex" , gap: 12, alignItems:'center', alignContent:'center'}}>
			<button className='nes-btn is-primary' onClick={()=>onArchive(note.id)}>Archivar {String(note.archived)}</button>
			<button className='nes-btn is-primary'>Editar</button>
			<button className='nes-btn is-primary' onClick={() => onDelete(note.id)}>Borrar</button>
		  </div> 
		</div>
	  )
};

export default NoteCard;
