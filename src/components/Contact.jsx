import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

import { useState } from 'react';




export default function Contact() {

 
 let [users, setUsers] = useState([])

let getUsers = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
 }

  useEffect(()=>{
  getUsers();
},[])

  return (
    <>
    <div className='container-fluid text-center bg-danger p-4'>
    <h1>Contact</h1>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user)=>(
      <tr key={user.id}>
      <th scope="row">{user.id}</th>  
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
    </tr>
    ))}
  </tbody>
</table>
    </div>
    </>
  )
}


