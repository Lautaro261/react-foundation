import axios from "axios"
import { useEffect, useState } from "react"
import type { ReqResUserListResponse, User } from "../interfaces"

const loadUsers = async(): Promise<User[]> =>{
    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users')
        return data.data;
    } catch (error) {
        console.log(error);
        return[]
    }
}


export const UserPage = () => {
    const [ users, setUsers ] = useState<User[]>([]);


    useEffect(()=>{
        loadUsers()
         .then(users => setUsers(users))
    },[])

  return (
    <>
    <h3>Usuarios: </h3>
    <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>

        <tbody>

            {
                users.map(user => (
                    <UserRow key= {user.id} user={user}/>
                ))
            }
        </tbody>
    </table>
    </>
  )
}

/* NOTA : alt en la etiqueta img es el valor que se mostrara en caso de que no se pueda cargar la imagen  */
interface Props{
    user:User;
}
export const UserRow = ({user}: Props)=>{
    const { avatar, first_name, email } = user;

    return(
        <tr>
                <td><img style={{width:'60px'}} src={ avatar} alt="User Avatar"/></td>
                <td>{ first_name }</td>
                <td>{ email }</td>
            </tr>
    )
}