import React,{ useState } from 'react';

const NewSongForm = ({ addSong }) => {
   
    const [song, setSong] = useState()
    const add = () => {
       addSong(song);
    }
   
    const handleChange  = (ev) => {
        setSong(ev.target.value);
    }
   
    return (
        <div>
            <input name="newsong" onChange={handleChange}></input>
            <button onClick={add}>Add Song</button>
        </div>
    );
};

export default NewSongForm;