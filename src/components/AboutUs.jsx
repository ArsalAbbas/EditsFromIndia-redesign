import React from "react";

function AboutUs() {
  return (
    <>
      <div className="container my-color w-100 m-0 p-3 mt-5">
        <h3 className="text-light">About Us</h3>
      </div>
      <div className="container mt-5">
        <p>
          At Edits from India, we are dedicated to providing our customers with
          high-quality photo, video, and album design services. Our base of
          operations is located in Mumbai, India, making us one of the leading
          providers of professional photo editing services in the country. Our
          team of skilled editors and designers are passionate about their work
          and are dedicated to delivering exceptional results to our clients. We
          understand that for photographers, a reliable photo editing company is
          an absolute must. That's why we've made it our mission to provide
          quick and accurate photo editing services, ensuring that our clients
          receive their finished products in a timely manner. Our Services
        </p>
        <h4 className="my-fontcolor fw-bold mt-5">Frequenty Asked Questions</h4>

        <div class="accordion accordion-flush mt-3" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How is my image retouched?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                All images are professionally retouched by our team of expert
                touch-up artists.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What types of photo editing can you do?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Can I request a quote?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                What if I am not satisfied with my edited photo?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
        <h5 className="my-fontcolor fw-bold mt-5">Sign up for emails</h5>
        <form action="" className="form-group">
          <div className="row">
            <div className="col-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="col-2">
              <button type="submit" class="btn btn-primary my-color">
                Subscribe now
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AboutUs;
