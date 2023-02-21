import React from "react";
import HomeImg from "../assets/HomeImg.png";
function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <p className="my-fontcolor-2">Welcome to</p>
            <h1 className="my-fontcolor fw-bold"> Edits from India</h1>
            <p className="mt-3 my-fontcolor-2">
              Find Value and Build confidence, Lorem Ipsum is simply dummy text
              of printing and typesetting industry.
            </p>
            <button className="btn btn-primary my-color text-light mt-3 align-middle p-2">
              Get Started{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div>
          <div className="col-md-6">
            <img src={HomeImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
