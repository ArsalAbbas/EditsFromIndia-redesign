import React from "react";

function BlogCards({ image, title, description }) {
  return (
    <>
      <div class="card text-center longCards p-2" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
        </div>
      </div>
    </>
  );
}

export default BlogCards;
