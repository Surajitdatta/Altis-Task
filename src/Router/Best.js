import React from 'react'
import data from "./best.json"
import "./Best.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


const Best = () => {
  
  return (
    <div className='bestCardMain'>
      {
        data.map((v,i)=>{
          return(
            <>
              <div className='bestCard'>
                <div className='bestHeader'>
                  <div className='bestStock'>
                    {v.stock?"Out Of Stock":""}

                  </div>
                  <div className='bestOff'>
                    {v.off?"5% Off":""}
                    

                  </div>
                  
                </div>
                <div className='bestImage'>
                  <img src={v.image} height="180px" width="100%" />
                </div>
                <div className='bestContent'>
                  <div className="bestRate">
                     {'★'.repeat(v.rating) + '☆'.repeat(5 - v.rating)}
                  </div>
                  <p>
                    {v.title}
                  </p>
                  <b>Price : <span style={{color:"#d8428d"}}>{v.price}</span></b>
                
                  

                </div>
                

              </div>
            </>
          )
        })
      }
      
    </div>
  )
}

export default Best