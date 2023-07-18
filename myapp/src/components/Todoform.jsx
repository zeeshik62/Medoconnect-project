import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";
function Todoform(){

    const dispatch=useDispatch();
    const todos=useSelector(state=>state.todos)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    const newTodo={
        id:Date.now(),
        title:title,
        description:description
    }
    dispatch({type:'ADD_TODO', payload:newTodo})
}
const deleteTodo=(id)=>{
    dispatch({type:'DELETE_TODO',payload:id})
}
const editTodo=(id)=>{
    dispatch({type:'UPDATE_TODO',payload:id})
}

    return(
        <div className='container w-50 mt-5 '>
<form onSubmit={handleSubmit}>
  <div class="row mb-3">
    <label for="title" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="description" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} class="form-control" id="inputPassword3"/>
    </div>
  </div>

  <button type="submit" class="btn btn-primary w-100">Save Todo</button>
</form>
<ul class="list-group mt-4">
  <li class="list-group-item bg-success ">All Todo</li>
  {
    todos.length===0 ? 
    <li className="list-group-item"><h5>No Todo Found..</h5></li>: 
    todos && todos.map(todo=> {
        return <li key={todo.id} class="list-group-item d-flex justify-content-between">
            <div>{todo.title}</div>
        <div>
        <Link to={`/editTodo/${todo.id}`} button className="btn btn-warning me-2" onClick={()=>editTodo(todo.id)}>Edit</Link>
        <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
        </li>})
  }
  
</ul>
        </div>
    )
}
export default Todoform;