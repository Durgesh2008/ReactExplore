import React, { useReducer } from 'react'
import withCounter from '../Hoc/withCounter'

const Counter1 = (props) => {
  const {count,dispatch}= props
  return (
  <>
  
     <div>Counter1- {count.cn}</div>
    <button onClick={()=>dispatch({type:"+",value:1})}>Increment</button>
    <button onClick={()=>dispatch({type:"-",value:1})}>decrement</button>
    <button onClick={()=>dispatch({type:"gfg"})}>reset</button>
  </>
  )
}

export default withCounter(Counter1) 