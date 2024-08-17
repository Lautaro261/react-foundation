import { useState } from "react"




export const Counter = () => {

   const [count, setCount] = useState<number>(10) 

   const increaseBy = (value:number)=>{
    setCount( count + value )
   }


  return (
    <>
      <h3>Contador: <small>{count}</small></h3>


      <div>
        <button onClick={()=>increaseBy(1)}>+1</button>
        &nbsp; {/* &nbsp es un caracter vacio, en este caso se usa para dar una separacion */}
        <button onClick={()=>increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
 