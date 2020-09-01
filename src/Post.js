import React from "react";
import "./Post.css";

function Post({ id, name, image, gender, status, age, date }) {
  return (
    <div>
      <div className="post">
        <img src={image} />
        <p>{name}</p>

        <p>{gender}</p>

        <p>{status}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Post;
