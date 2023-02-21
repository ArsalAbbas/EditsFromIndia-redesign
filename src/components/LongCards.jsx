import React from "react";

function LongCards({ cardHeading, cardContent, image }) {
  return (
    <>
      <div class="card mb-3 longCards p-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={image} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{cardHeading}</h5>
              <p class="card-text my-fontcolor-2">{cardContent}</p>
              <button
                type="button"
                class="btn btn-outline-danger position-absolute bottom-0 end-0"
              >
                Book Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LongCards;
