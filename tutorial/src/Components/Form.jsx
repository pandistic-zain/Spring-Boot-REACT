import React,{useState} from "react";
import "../App.css";
function Form(){
    const[name,setName]= useState("");
    const[option,setOption]= useState("0");
    const[check,setCheck]= useState(false);
    function getFormData(e){
        console.log(name,option,check)
        e.preventDefault();
    }
    return(
        <>
        <h1>This IS A Form To Get data</h1>
        <form onSubmit={getFormData}>
            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br /><br />
            <select name="Selector" onChange={(e)=>setOption(e.target.value)}>
                <option value="0">Select Option</option>
                <option value="1">Riphah</option>
                <option value="2">NUST</option>
                <option value="3">LUMS</option>
            </select>
            <br /><br />
            <input type="checkbox" onChange={(e)=>setCheck(e.target.checked)} /><span>Are You Sure</span>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
        </>
    );
}
export default Form;