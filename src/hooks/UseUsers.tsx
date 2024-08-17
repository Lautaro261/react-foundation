import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
  try {
    const { data } = await axios.get<ReqResUserListResponse>(
      "https://reqres.in/api/users",
      {
        params: {
          page: page,
        },
      }
    );
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const UseUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPage = useRef(1);

  useEffect(() => {
    loadUsers(currentPage.current).then((users) => setUsers(users));
  }, []);

  const nextPage = async () => {
    currentPage.current++;
    const users = await loadUsers(currentPage.current);
    if (users.length > 0) {
      setUsers(users);
    } else {
      currentPage.current--;
    }
  };

  const prevPage = async () => {
    if (currentPage.current < 1) return;

    currentPage.current--;
    const users = await loadUsers(currentPage.current);
    setUsers(users);
  };

  return {
    //Properties
    users,

    //Methods
    nextPage,
    prevPage,
  };
};
