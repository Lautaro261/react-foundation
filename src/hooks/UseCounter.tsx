import { useState } from "react"

interface Options {
    initialValue?: number;
}

export const UseCounter = ({initialValue = 0}: Options) => {

    const [count, setCount] = useState<number>(initialValue) 

    const increaseBy = (value:number)=>{
        const newValue = count + value

        if(newValue < 0) return; 

        setCount( newValue )
    }

    
return {
    //Properties
    count,

    //Methods
    increaseBy
}

}

//Es bueno retornar en orden, primero las propiedades y luego los metodos