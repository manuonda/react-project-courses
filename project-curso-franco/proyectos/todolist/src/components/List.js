import React from 'react'
import Item from './Item'

const List = ({activities}) => {
    return (
        <>
            { activities.length === 0 ? 
             <>No Hay Registros</>
            :
            activities && activities.map(item => 
              <Item key={item.id} item={item}></Item>    
            )}

        </>
    )
}

export default List;
