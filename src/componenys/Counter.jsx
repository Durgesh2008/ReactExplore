import React, { useContext, useEffect, useReducer, useRef } from 'react'
import { person } from '../Context'
const initial = {
    cn:0
}

const reducer = (state,action)=>{
switch (action.type) {
    case "+":
        return {cn:state.cn+1}
    case "-":
        return {cn:state.cn-1}
    default:
        return initial
       
}
}
const Counter = () => {
    const [count,dispatch] = useReducer(reducer,initial)
    const dkdata = useContext(person)
    const prevValueRef = useRef();
useEffect(()=>{
    prevValueRef.current = count.cn
},[count.cn])

  return (
    <>
    <h1>name- {dkdata.name} </h1>
    <h2>age- {dkdata.age}</h2>
    <p>pre- {prevValueRef.current}</p>
     <div>Counter- {count.cn}</div>
    <button onClick={()=>dispatch({type:"+"})}>Increment</button>
    <button onClick={()=>dispatch({type:"-"})}>decrement</button>
    <button onClick={()=>dispatch({type:"gfg"})}>reset</button>
    </>
   
  )
}

export default Counter