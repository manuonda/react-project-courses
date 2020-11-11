import React , { useState, useEffect}from 'react';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: 'almost home', id :1 },
        { title: 'memory gospel', id : 2},
        { title: 'this wild darkness', id: 3}
    ])

    return (
        <div className="song-list">
            <ul>
               { songs.map(( song) => (
                 <li key={song.id}>{ song.title }</li> 
               ))}
            </ul>
        </div>
    );
};

export default SongList;