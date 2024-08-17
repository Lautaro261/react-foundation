import { UseCounter } from "../hooks/UseCounter"


export const CounterWithHook = () => {

  const { count, increaseBy} = UseCounter({
    initialValue: 3,
  }); 


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
 