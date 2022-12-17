import React from "react";
import Title from "../components/Title";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadPost({ title, img }) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        {!title ? (
          <Title classes={"subtitle"} text="Post title" />
        ) : (
          <Title classes={"subtitle"} text={title} />
        )}
      </div>
      <div className="card-body d-flex" style={{ gap: 10 }}>
        <LazyLoadImage
          src={img}
          height={"fit-content"}
          width={500}
          effect="blur"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          recusandae repellendus ad, veritatis voluptatum velit molestias quo
          nostrum eveniet doloremque. Distinctio sunt molestias quam, soluta
          necessitatibus eaque illo libero error!
        </p>
      </div>
    </div>
  );
}
