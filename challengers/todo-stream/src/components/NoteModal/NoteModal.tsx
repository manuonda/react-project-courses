import React from 'react';
import { Note } from '../../types';
export interface NoteModalInterface {}

type NoteModalProps = {
	note: Partial<Note>,
	onClose: VoidFunction,
	onChange: (field: string, value: string) => void;
	onSave: VoidFunction
  }

const NoteModal : React.FC<NoteModalProps> = ({ onClose, note , onChange, onSave}: NoteModalProps) => {
	return (
		<section 
		  style={{ width: '100vw', height: '100vw', position: 'fixed', 
			top: 0, left: 0, display:"flex", alignItems:"center" ,
		  justifyContent:"center"}}
		  className="nes-dialog" id="dialog-default">
			<div style={{ position:'absolute',
			 display:'flex', alignItems:'center', justifyContent: 'center',
			backgroundColor: "rgba(0,0,0,0.2)" , width:'100%', height:'100%'}} />
		  <form method="dialog" style={{
			position: "absolute",
			backgroundColor: "white" ,
			 zIndex:1, padding:12 ,border:'5px solid black'}}>
			<h1 className='title'>Create/Edit Note</h1>
			<div className='nes-field'>
			  <label htmlFor="name_field">Your name</label>
			  <input 
			   onChange={(event) => onChange('title' , event.target.value)}
			  type="text" value={note.title} id="name_field" className='nes-input'></input>
			</div>
	
			<div className='nes-field'>
			  <label htmlFor='content'>Content</label>
			  <textarea 
			   onChange={(event) => onChange('content' , event.target.value)} 
			   className='nes-textarea' 
			   value={note.content} id="content"></textarea>
	
			</div>
			
			<menu  style={{display:'flex' , alignItems:'center', justifyContent:'center' }} className="dialog-menu">
			  <button className="nes-btn" onClick={onClose}>Cancel</button>
			  <button className="nes-btn is-primary" onClick={onSave}>Save</button>
			</menu>
		  </form>
		</section>
	
	  )
};

export default NoteModal;
