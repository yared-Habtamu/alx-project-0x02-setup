import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <main>
      <Header />
      <h1>Posts Page</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </main>
  );
}
