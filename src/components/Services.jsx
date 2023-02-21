import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
import img5 from "../assets/image5.png";
import img6 from "../assets/image6.png";
import LongCards from "./LongCards";
function Services() {
  const cardsHeading = {
    h1: "Image Masking",
    h2: "Drop Shadow",
    h3: "Photo Retouching",
    h4: "Ghost Mannequin",
    h5: "Background Remover",
    h6: "Clipping Path",
  };
  const cardsContent = {
    c1: "Image masking is a technique used in image processing and computer graphics to separate the foreground from the background of an image.",
    c2: "Drop shadow is a visual effect used to create a sense of depth and dimension in graphic design and digital media. It involves adding a shadow to an object to give it a raised or floating appearance, as if it were casting a shadow on the background.",
    c3: "Clipping path is an exceptional choice of quality background removal priority service from Clipping Path India Pro.",
    c4: "Ghost mannequin is a technique used in fashion photography to create the illusion of an invisible mannequin.",
    c5: "Background removal involves separating the foreground object from its background, making it possible to change the background color or to use the object on a new background.",
    c6: "A clipping path is a vector path used in image editing to define the specific area of an image that should be visible, while everything outside the path is masked or removed.",
  };

  const setData1 = () => {};
  const setData2 = () => {};
  const setData3 = () => {};
  return (
    <>
      <div className="container rounded-end-4 my-color w-25 m-0 p-3">
        <h3 className="text-light">Services</h3>
      </div>
      <div className="container mt-5">
        <button
          className="btn btn-tag btn-rounded my-color my-fontcolor-3"
          id="PEButton"
          onClick={setData1}
        >
          {" "}
          Photo Editing{" "}
        </button>
        <button
          className="btn btn-tag btn-rounded"
          id="VEButton"
          onClick={setData2}
        >
          {" "}
          Video Editing{" "}
        </button>
        <button
          className="btn btn-tag btn-rounded"
          id="ADButton"
          onClick={setData3}
        >
          {" "}
          Album Designing{" "}
        </button>
      </div>

      <div className="container mt-5" id="PhotoEditing">
        <div className="row">
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img1}
              cardHeading={cardsHeading.h1}
              cardContent={cardsContent.c1}
            />
          </div>
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img2}
              cardHeading={cardsHeading.h2}
              cardContent={cardsContent.c2}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img3}
              cardHeading={cardsHeading.h3}
              cardContent={cardsContent.c3}
            />
          </div>
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img4}
              cardHeading={cardsHeading.h4}
              cardContent={cardsContent.c4}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img5}
              cardHeading={cardsHeading.h5}
              cardContent={cardsContent.c5}
            />
          </div>
          <div className="col d-flex align-items-stretch">
            <LongCards
              image={img6}
              cardHeading={cardsHeading.h6}
              cardContent={cardsContent.c6}
            />
          </div>
        </div>
      </div>
      {/* <div className="container mt-5" id="VideoEditing">
        Video Editing
      </div>
      <div className="container mt-5" id="AlbumDesigning">
        Album Designing
      </div> */}
    </>
  );
}

export default Services;
