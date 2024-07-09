import { useState } from "react";
import '../App.css';
function States(){
    const [name,setName]= useState("Zain");
    function updateData(){
        setName("Saith Zain Ul Abdeen Rehmani")

    }
    return(
        <>
        <h1>States ---- {name}</h1>
        <button onClick={updateData}>Updater</button>
        </>
    );

}
export default States;