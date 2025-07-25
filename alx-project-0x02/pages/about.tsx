import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";
// import Button from "@/components/common/Header";
export default function About() {
  return (
    <main>
      <Header />
      <h1>About Page</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button size="small" shape="rounded-sm">
          Small Rounded-sm
        </Button>
        <Button size="medium" shape="rounded-md">
          Medium Rounded-md
        </Button>
        <Button size="large" shape="rounded-full">
          Large Rounded-full
        </Button>
      </div>
    </main>
  );
}
