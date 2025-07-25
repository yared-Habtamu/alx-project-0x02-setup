import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => (
  <div
    style={{
      border: "1px solid #888",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem 0",
      background: "#f0f8ff",
    }}
  >
    <h3>{name}</h3>
    <p>Email: {email}</p>
    <p>Address: {address}</p>
  </div>
);

export default UserCard;
