import React, { useState, useEffect } from "react";
import LazyLoadPost from "./LazyLoadPost";
import Title from "../components/Title";
export default function ImagePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });
  return (
    <div className="container ">
      <Title text="Posts images" />
      <div className="container d-flex flex-column" style={{ gap: 30 }}>
        {posts.map((post) => (
          <LazyLoadPost key={post.id} title={post.title} img={post.url} />
        ))}
      </div>
    </div>
  );
}
