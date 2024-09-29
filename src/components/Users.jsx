import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUsers] = useState(loadUsers);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remainUsers = users.filter((user) => user._id !== id);
          setUsers(remainUsers);
        }
      });
  };
  return (
    <div>
      <h1>users</h1>
      <p>{users.length}</p>

      {users.map((user) => (
        <p key={user._id}>
          {" "}
          {user.name} {user.email}{" "}
          <Link to={`/users/${user._id}`}>Update user</Link>
          <button onClick={() => handleDelete(user._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
