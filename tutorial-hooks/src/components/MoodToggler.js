import React ,{ useState} from 'react';

const MoodToggler = () => {
   
    const[isHappy, setIsHappy] = useState(true)
    const toogleIsHappy = () => setIsHappy(!isHappy)
    return <h3 onClick={toogleIsHappy}> {isHappy? ":) ": ":("}</h3> 
};

export default MoodToggler;