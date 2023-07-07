import React from 'react'
import {useState,useEffect} from 'react'
function FetchData() {
    let[todos,setTodos] = useState([])

    useEffect(()=>{
        fetch("http://localhost:4000/componentsData")
        .then(res=>res.json())
        .then(todosData=>setTodos(todosData))
        .catch(err=>console.log("err is",err))
    },[])

  return (
    <div className='container-fluid'>

        <table className='table text-white fs-4 text-italic mt-5'>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>price(for 1)</th>
                    <th>Quantity</th>
                    <th>price</th>
                    <th>link</th>

                </tr>
            </thead>
            <tbody>
                {todos.map(todoObj=>
                    <tr key={todoObj.id}>
                        <td>{todoObj.Component}</td>
                        <td>{todoObj.priceFor1}</td>
                        <td>{todoObj.Quantity}</td>
                        <td>{todoObj.Column4}</td>
                        <td><a className='link' href={todoObj.link}>Click here</a></td>
                    </tr>)}
            </tbody>
        </table>


    </div>
  )
}

export default FetchData