import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          <button onClick={() => handleDelete(user._id)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
