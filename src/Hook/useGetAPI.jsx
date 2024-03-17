import React, { useEffect, useState } from 'react'

const useGetAPI = (url) => {
    const [data,setdata] = useState(null)
    const [loading,setloading] = useState(true)
    const [error,seterror] = useState(null)

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
      
        fetch(url, { signal: signal })
        .then((res) => res.json())
        .then((res) =>  {
            setdata(res) 
             setloading(false)})
        .catch((error) => {
            if (error.name === "AbortError") {
                console.log("successfully aborted");
              } else {
                seterror(error.message)
                setloading(false)
              }
        })
        return () =>  controller.abort();
        
       },[url])
  return (
  {data,error,loading}
  )
}

export default useGetAPI