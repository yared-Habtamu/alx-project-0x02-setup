import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  address: { street: string; suite: string; city: string; zipcode: string };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <main>
      <Header />
      <h1>Users Page</h1>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          address={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
        />
      ))}
    </main>
  );
}
