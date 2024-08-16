


export const BasicTypes = ()=>{
    const name : string = 'Fernando';
    const age:number = 38;
    const isActive:boolean = true;

    const powers: string [] = ['React', 'Angular', 'React Native', 'Vue', 'Qwik'];


    return(
        <>
          <h3>Tipos basicos</h3>
          {name} {age} {isActive ? 'Activo': 'Inactivo'}
          <br/>
          {powers.join(', ')}
        </>
    )
} 