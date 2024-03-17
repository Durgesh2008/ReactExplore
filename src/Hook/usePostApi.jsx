import React, { useState } from 'react'

const usePostApi = (url,body,header) => {
    const [data,setdata] = useState(null)
    const [loading,setloading] = useState(false)
    const [error,seterror] = useState(null)
    const makeRequest = (url,body,header)=>{
        setloading(true)
        fetch(url, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(body) 
           
          })
          .then(response => {
            if (!response.ok) {
                seterror("Network response was not ok")
                setloading(false)
            }
            return response.json(); 
          })
          .then(data => {
            setdata(data)
            console.log(data)
            setloading(false)
          })
          .catch(error => {
           seterror(error.message)
           setloading(false)
          });
    }
  
return [{data,loading,error},makeRequest]

}

export default usePostApi