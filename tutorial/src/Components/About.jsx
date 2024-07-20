import React from 'react'
import DataTrans from './DataTrans'
import Form from './Form'
export default function About() {
  function dataShower(q) {
    let name = "Zain Ul Abdeen";
    name = q;
    console.warn(name);
    alert(name);
  }
  return (
    <>
       <DataTrans data={dataShower} />
       <Form />
    </>
  )
}
