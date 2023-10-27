interface User {
  id: number;
  name: string;
}

const NewUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <div>
      {" "}
      {users.map((user: User, idx) => {
        return (
          <div key={idx}>
            {" "}
            {user.id} {user.name}
          </div>
        );
      })}{" "}
    </div>
  );
};

export default NewUser;
