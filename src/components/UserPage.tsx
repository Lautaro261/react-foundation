import { UseUsers } from "../hooks/UseUsers";
import { UserRow } from "./UserRow";

export const UserPage = () => {
  const { users, nextPage, prevPage } = UseUsers();

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
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>Next</button>
      </div>
    </>
  );
};

/* NOTA : alt en la etiqueta img es el valor que se mostrara en caso de que no se pueda cargar la imagen  */
