import { useRef} from 'react';

const App = () => {
    const ref= useRef();
    const inputRef = useRef();

    const click = () => {
           console.log(ref.current);
    }

    const focus = () => {
        inputRef.current.focus();
    }
    return(
        <>
        <div onClick={click} ref={ref}>llala</div>
        <input ref={inputRef}></input>
        </>
    )
}

export default App;