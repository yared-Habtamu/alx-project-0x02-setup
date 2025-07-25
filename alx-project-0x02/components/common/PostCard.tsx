import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div
    style={{
      border: "1px solid #888",
      borderRadius: "8px",
      padding: "1rem",
      margin: "1rem 0",
      background: "#f9f9f9",
    }}
  >
    <h3>{title}</h3>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;
