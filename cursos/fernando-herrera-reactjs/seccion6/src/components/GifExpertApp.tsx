import React , {useState} from 'react'
import PropTypes from 'prop-types'
import { ExpertItem } from './ExpertItem';
import AddCategory from './addCategory';

type Category = {
    nombre: string;
}
const categorias:string[] = ['One Puch Man', 'Samurai X'];
const GifExpertApp:React.FC = ( ) => {

    const [categorys, setCategorys] = useState<string[]>(categorias);
    
    const handleAdd = () => {
        setCategorys([
            ...categorys,
            "HUNTERX2"
        ]);
        setCategorys( cats => [...cats, "Hunberx"]);
        categorys.sort();
    }
    
    return (
        <>
        <AddCategory handleCategorys={setCategorys}></AddCategory>
          <button onClick={handleAdd}></button>
           {categorys.map((item:string) => (
             <ExpertItem key={item} item={item}>{item}</ExpertItem>
           ))}           
        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
