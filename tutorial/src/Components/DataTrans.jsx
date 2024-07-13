import React from "react";

export default function DataTrans(p) {
  const quote = "Q fer Pehndi A Naw Thaak!";
  return (
    <>
      <h1>Data Transfer From Child Component</h1>
      <button
        onClick={() => {
          p.data(quote);
        }}
      >
        Click Me
      </button>
    </>
  );
}
