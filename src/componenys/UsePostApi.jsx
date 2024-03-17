import React from 'react'
import usePostApi from '../Hook/usePostApi'

const UsePostApi = () => {
    const [{ data, loading, error }, makeRequest] = usePostApi()

    const handlePostcall =()=>{
        const body = {
            name: "Apple MacBook Pro 16",
        data: {
               year: 2019,
               price: 1849.99,
               "CPU model": "Intel Core i9",
               "Hard disk size": "1 TB"
            }
         }
        const  url = "https://api.restful-api.dev/objects"

       const   header = { 'Content-Type': 'application/json'}
       makeRequest(url,body,header)
    }
    if (loading ){
        return(<h1>Loading .........</h1>)
    }

    if(error){
        return(<h1>error</h1>)
    }
  return (
    <>
     <div>data is here --- {data&&data.id} </div>
     <button onClick={handlePostcall}>click</button>
    </>
   
    
  )
}

export default UsePostApi