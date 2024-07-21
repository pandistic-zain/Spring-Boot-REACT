import React from 'react'
import { Link } from 'react-router-dom'
export default function DynamicRouting() {
    const users = [
        { id: 1, name: "张三", age: 18 },
        { id: 2, name: "李四", age: 19 },
        { id: 3, name: "Zain", age: 16 },
        { id: 4, name: "Farhan", age: 29 },
        { id: 5, name: "Obaid", age: 12 },
        { id: 6, name: "Muzamil", age: 39 },
      ];
    
      return (
        <>
          <h1>Users, Hello from there - - Dynamic Routing</h1>
          {users.map((item) => (
            <div key={item.id}><Link to={"/Users/"+ item.id + "/" + item.name}><h4>{item.name}</h4></Link></div>
          ))}
        </>
      );
}
