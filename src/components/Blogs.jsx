import React from "react";
import BlogCards from "./BlogCards";
import BlogImage1 from "../assets/Card1.png";
import BlogImage2 from "../assets/Card2.png";
import BlogImage3 from "../assets/Card3.png";

function Blogs() {
  const blogData = {
    title: {
      title1: "What is Photo Editing?",
      title2: "What is Video Editing?",
      title3: "What is Album Designing?",
    },
    description: {
      description1:
        "Photo editing is a crucial step in the process of capturing memories through photographs. It is the process of enhancing and manipulating images to bring out the best in them.....",
      description2:
        "Video editing is a critical aspect of modern film making. It is the process of taking raw footage and transforming it into a polished, engaging video that can be shared with the world....",
      description3:
        "Album designing is a creative art form that has become increasingly popular in recent times. With advancements in technology, it is now possible to preserve your memories in a visually appealing and organized manner......",
    },
  };

  return (
    <>
      <div className="container rounded-end-4 my-color w-25 m-0 p-3 mt-5">
        <h3 className="text-light">Blogs</h3>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex align-items-stretch">
            <BlogCards
              image={BlogImage1}
              title={blogData.title.title1}
              description={blogData.description.description1}
            />
          </div>
          <div className="col d-flex align-items-stretch">
            <BlogCards
              image={BlogImage2}
              title={blogData.title.title2}
              description={blogData.description.description2}
            />
          </div>
          <div className="col d-flex align-items-stretch">
            <BlogCards
              image={BlogImage3}
              title={blogData.title.title2}
              description={blogData.description.description3}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
