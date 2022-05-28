import { useRef } from "react";


type IProps = {
   children: any,
   title: string,
   root:any
}

export default function Modal ({ children, title, root}:IProps){
   
    const ref = useRef(null);
    return (
        <div ref={ref}>
        <div>{title}</div>
        <div>
            <button>X</button>
        </div>
         <div>
             {children}
         </div>
        </div>
    )
}
