import react, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{

    const data={
        "fname" : "",
        "lname" : "",
        "email" : "",
        "phone" : "",
        "flag" : "",
        "logcheck" : "0",
       
    }

    const [state, setState]= useState(data);

    // const update=()=>{
    //     setState({
    //         "log":"no",
    //         "name" : "no one",
    //         "flag" : "1",
    //     })
    // }

   
    return (
        <NoteContext.Provider value={{state, setState}}>
        {/* <NoteContext.Provider value={{state, update}}> */}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;