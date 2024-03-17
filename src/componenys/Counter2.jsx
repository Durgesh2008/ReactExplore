import React, { useReducer } from 'react'
import withCounter from '../Hoc/withCounter'
const initial = {
    cn:0
}

const reducer = (state,action)=>{
switch (action.type) {
    case "+":
        return {cn:state.cn+2}
    case "-":
        return {cn:state.cn-2}
    default:
        return initial
       
}
}
const Counter2 = (props) => {
    const {count,dispatch}= props
  return (
 <>

 
     <div>Counter2- {count.cn}</div>
    <button onClick={()=>dispatch({type:"+",value:2})}>Increment</button>
    <button onClick={()=>dispatch({type:"-",value:2})}>decrement</button>
    <button onClick={()=>dispatch({type:"gfg"})}>reset</button>
 </>
  )
}

export default withCounter(Counter2) 