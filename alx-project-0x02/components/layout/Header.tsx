import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header>
    <nav>
      <ul
        style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}
      >
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
