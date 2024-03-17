import React from 'react'
import withDatafetching from '../Hoc/withDatafetching'

const ApiDataShow = ({ dataobj }) => {
    const { data, loading, error } = dataobj;
  if (loading){
    return <div>....Loading</div>
  }
  if (error){
    return <div>Error:{error}</div>
  }
  return(
   <>
    <h1>data</h1>

    
    {
       data &&  data.map((ele)=>{
                 return (
                    <div key={ele.id}>
                    <p>{ele.name}</p>
                    </div>
                 )
        }
        )
    }
    
   </>
  )
}

export default withDatafetching("https://api.restful-api.dev/objects")(ApiDataShow) 