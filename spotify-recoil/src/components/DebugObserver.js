import {useRecoilTransactionObserver_UNSTABLE} from "recoil"


export const keysAbleToSave = ["spotifyRefreshToken","spotifyTokenResponse"];

export default function DebugObserver(){
    useRecoilTransactionObserver_UNSTABLE(({ snapshot}) => {
       // Todo persistir la informacion 
       console.log(snapshot.getNodes_UNSTABLE());  
       for( const modifiedAtom of snapshot.getNodes_UNSTABLE({isModified: true})) {
           const atom = snapshot.getLoadable(modifiedAtom).contents;
           console.log(atom , atom.state ,  modifiedAtom.key);
           if ( atom.state === "hasValue" && keysAbleToSave.indexOf(modifiedAtom.key) !== -1) {
               localStorage.setItem(modifiedAtom.key, JSON.stringify({ value: atom.contents}));
           }
        } 
    })

    return null;
}