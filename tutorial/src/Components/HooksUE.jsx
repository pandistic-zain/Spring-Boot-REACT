import React,{useEffect,useState} from 'react'

export default function HooksUE(p) {
const[data,setData]= useState(p.data)
const[Counter,setCounter]= useState(p.count)
useEffect(()=>{
    console.error("useEffect For Data")
},[data])
useEffect(()=>{
    console.error("useEffect For Counter")
},[Counter])
  return (
    <div>
      <h1>Hellow From Hooks!</h1>
      <h2>Props From Apps (Data) -- {data}</h2>
      <h2>Props From Apps (Counter)-- {Counter}</h2>
      <button onClick={()=>setData("Saith Zain Ul Abdeen Rehmani")}>Update DATA State</button>
      <button onClick={()=>setCounter(Counter+1)}>Update COUNTER State</button>
    </div>
  )
}
