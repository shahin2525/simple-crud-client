import { useLoaderData } from "react-router-dom";

const UpdateUsers = () => {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {
      name,
      email,
    };
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("data up dated");
        }
      });
  };

  return (
    <div>
      <h1>Update user {loadedUser.name}</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={loadedUser.name} name="name" id="" />
        <input
          type="email"
          defaultValue={loadedUser.email}
          name="email"
          id=""
        />
        <input type="submit" value="update user" />
      </form>
    </div>
  );
};

export default UpdateUsers;
