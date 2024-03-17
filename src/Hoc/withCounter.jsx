import React, { useReducer } from 'react'
const initial = {
    cn:0
}

const reducer = (state,action)=>{
switch (action.type) {
    case "+":
        return {cn:state.cn+action.value}
    case "-":
        return {cn:state.cn-action.value}
    default:
        return initial
       
}

}
const withCounter = (WrappedComponent)=> {

    return (props) => {
        const [count,dispatch] = useReducer(reducer,initial)
        return (
         <WrappedComponent {...props} count={count} dispatch={dispatch}/>
        )
      }
} 

export default withCounter