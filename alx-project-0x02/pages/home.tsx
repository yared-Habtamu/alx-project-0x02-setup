import React, { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
//@/components/layout/Header"

interface Post {
  title: string;
  content: string;
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (data: Post) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <main>
      <Header />
      <h1>Home Page</h1>
      <button onClick={() => setModalOpen(true)}>Add New Post</button>
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
      <Card title="Welcome" content="This is a reusable card component." />
      <Card title="Another Card" content="You can use this card anywhere!" />
      {posts.map((post, idx) => (
        <Card key={idx} title={post.title} content={post.content} />
      ))}
    </main>
  );
}
