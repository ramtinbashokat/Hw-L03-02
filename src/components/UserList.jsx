import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const addUser = () => {
    if (name && email) {
      const newUser = {
        id: users.length + 1,
        name,
        email,
      };
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 w-lg bg-white rounded-xl shadow-md space-y-4">
      <h2>UserList</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex justify-between items-center p-2 bg-gray-100"
          >
            <span>
              {user.name} {user.email}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer"
              onClick={() => deleteUser(user.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-bold">Add Users</h3>
      <div className="flex flex-col space-y-2 items-center">
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded-md"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="bg-[#007bff] text-white px-4 py-2 rounded w-[120px]"
          onClick={addUser}
        >
          add User
        </button>
      </div>
    </div>
  );
};

export default UsersList;
