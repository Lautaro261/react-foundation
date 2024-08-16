

interface Person {
    fisrtName: string;
    lastName: string;
    age: number;
    isAlive?: boolean;  //opcional
    address: Address;
}

interface Address {
    country: string;
    houseNo: number;
}


export const ObjectLiterals = () => {

    const person : Person = {
        fisrtName: "Fernando",
        lastName: "Herrera",
        age: 37,
        isAlive: true,
        address: {
            country: "Canada",
            houseNo: 615
        }
    }


    return(
        <>
        <h3>Objetos literales</h3>
        <pre>

        {JSON.stringify( person, null, 2)}
        </pre>
        </>
    )
}