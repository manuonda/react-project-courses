import React from 'react';
import { Note } from '../../types';
export interface NoteCardProps{
	note: Note,
	onArchive : (id:Note['id']) => void ,
	onDelete: (id:Note['id']) => void,
	onEdit :( note:Note) => void,
    label: string;
	class: string;
	id: string;
	placeHolder?:string;
    
}
  

interface propiedadesComponent {
	label: string;
	id: string;
}

export interface IButton extends propiedadesComponent {
     submit: VoidFunction,
}

export interface IFormulario extends propiedadesComponent {
	 action: string;
	 method: string;
}


const NoteCard : React.FC<NoteCardProps> = ({ note,onArchive,onDelete, onEdit }:NoteCardProps) => {
	return (
		<div className="nes-container with-title is-centered" data-testid="todo">
		  <div>
			<h3><strong>{note.title}</strong></h3>
		    <span>Last Edit : {note.lastEdit}</span>
		  </div>
		  <div 
			style={{ display: "flex" , gap: 12, alignItems:'center', alignContent:'center'}}>
			<button className='nes-btn is-primary' onClick={() => onArchive()}>Archivar</button>
			<button className='nes-btn is-primary' onClick={() => onEdit(note)}>Editar</button>
			<button className='nes-btn is-primary' onClick={() => onDelete(note.id)}>Borrar</button>
		  </div> 
		</div>
	  )
};

export default NoteCard;
