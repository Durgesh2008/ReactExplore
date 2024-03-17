import React, { useEffect, useReducer } from 'react'
const initialData = {
    data:[],loading:true,error:null
}

const reducer = (state, action) => {
    switch (action.type) {
      case "success":
        return { ...state, data: action.data, loading: false, error: null };
      case "fail":
        return { ...state, error: action.error, loading: false };
      default:
        return { ...state, loading: true, error: null, data: [] }; // Resetting data and error
    }
  };
const withDatafetching = (url)=> (WrappedComponent) => {
  return (props)=>{
   const [dataobj,apidispatch] = useReducer(reducer,initialData)
//    const fetchdata =async (signal)=>{
//      try {
//         const res = await fetch(url,{signal: signal});
//         if (!res.ok){
//             apidispatch({type:'fail',error:"Network response is not ok"})
           
//         }
      
//         let x = await res.json()
      
      
//      } catch (error) {
//         apidispatch({type:'fail',error:error.message})
//      }
//    }

   useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetch(url, { signal: signal })
    .then((res) => res.json())
    .then((res) =>   apidispatch({type:'success',data:res}))
    .catch((error) => {
        if (error.name === "AbortError") {
            console.log("successfully aborted");
          } else {
            apidispatch({type:'fail',error:error.message})
          }
    })
    return () =>  controller.abort();
    
   },[url])
    return (
       <WrappedComponent {...props} dataobj={dataobj}/>
      )
  }
 
}

export default withDatafetching