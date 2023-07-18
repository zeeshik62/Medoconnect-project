import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams, useNavigate } from "react-router-dom";




const EditTodo=()=>{

  
  const {id}=useParams();

  const todos = useSelector(state=>state.todos)
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const todo = todos.find((item)=>item.id === Number(id));


  const [title,setTitle]=useState(todo.title)
  const [description,setDescription]=useState(todo.description)
  
  
  const handleSubmit = (e)=>{
      e.preventDefault();
      const updatedTodo={
        id:id,
        title:title,
        description:description
    }
    dispatch({type:'UPDATE_TODO',payload:updatedTodo})
    navigate('/todo')
    //dispatch update action
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
    
      <button type="submit" class="btn btn-primary w-100">Update Todo</button>
    </form>
    </div>
)
}
export default EditTodo;