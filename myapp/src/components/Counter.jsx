import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
const Counter =()=>{
    const dispatch=useDispatch();
    const counter=useSelector((state)=>state.counter);
    const [num,setNum]=useState('');
    const handleDeposit=()=>{
       dispatch({type: 'DEPOSIT', payload:Number(num)})
    }
    return(
    <div>
        <input type='text' onChange={(e)=>setNum(e.target.value)} value={num}></input>
        <button onClick={handleDeposit}>Deposit</button>
       <span>{counter}</span>
        <button onClick={()=>dispatch({type:'WITHDRAW',payload:10})}>Withdraw</button>
    </div>
)
}
export default Counter;