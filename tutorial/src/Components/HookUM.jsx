import React,{useState,useMemo} from 'react'

export default function HookUM() {
    const[data,setData]= useState(0);
    const[items,setItems]= useState(2);
    const CounterMEMO = useMemo(()=>{
        console.warn("counter For Items is running in MEMO")
        return items*3;

    },[items])
  return (
    <>
      <h1>Data : {data}</h1>
      <h1>Items : {items}</h1>
      <h1>{CounterMEMO}</h1>
      <button onClick={()=>setData(data+1)}>Update Data</button>
      <button onClick={()=>setItems(items*2)}>Update Item</button>
    </>
  )
}
