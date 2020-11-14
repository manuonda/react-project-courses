import React , { useState, useEffect}from 'react';
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';


const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id :1 },
        { title: 'memory gospel', id : 2},
        { title: 'this wild darkness', id: 3}
    ])
    const addSong = (title) => {
      setSongs([...songs,{ id: uuid(), title: title }])
    } 

    const [age, setAge] = useState(20)

    // limit only songs
    useEffect(() =>{
        console.log('useEffect hook ran', songs);
    },[songs])
    // limit only age
    useEffect(() =>{
        console.log('useEffect hook ran', age);
    },[age])

    return (
        <div className="song-list">
            <ul>
               { songs.map(( song) => (
                 <li key={song.id}>{ song.title }</li> 
               ))}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
               <button onClick={() => setAge(age + 1 ) }>Add 1 to age: {age}</button>
        </div>
    );
};

export default SongList;