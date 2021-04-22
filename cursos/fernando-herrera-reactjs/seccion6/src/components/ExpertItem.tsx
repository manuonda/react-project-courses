import React from 'react'

type Props = {
    item: string;
}

export const ExpertItem:React.FC<Props> = ({ item }) => {
    return (
        <>
          <li>{item}</li>   
        </>
    )
}
