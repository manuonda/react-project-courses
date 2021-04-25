import React from 'react'
import { Gif } from '../types'
import './style.css';

type Props = {
    image: Gif
}

const GifGridItem:React.FC<Props> = ({ image }) => {
    return (
        <>
          <div className="card">
            <img src={image.url} alt={image.title}></img>    
            <p>{image.title}</p>
          </div> 
        </>
    )
}

export default GifGridItem
