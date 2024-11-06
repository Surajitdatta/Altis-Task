import React, { useEffect , useState} from 'react'
import New from './New'
import Best from './Best'

const Render = ({data}) => {
  const[render, setRender] = useState(data)

  // useEffect(()=>{
  //   setRender(data)
  // },[])
  console.log(data)

  return (
    <div>
      {data === "New" && <New/>}
      {data === "Best" && <Best/>}
        
    </div>
  )
}

export default Render;