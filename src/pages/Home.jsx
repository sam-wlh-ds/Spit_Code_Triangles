import React, { useState, useEffect } from "react";

function Home2() {
  return (
    <>
      <div className="position-relative">
        <div className="container" style={{ width: "100%", height: "100vh" }}>
          <iframe
            src="https://my.spline.design/home-2e4a3387b7b41974330fd1b4663346d7/"
            frameborder="0"
            width="100%"
            height="100%"
          ></iframe>

          <div class="position-absolute top-0 start-50 translate-middle d-inline-block heading">
            <p className="fs-1 text-white cssanimation fadeIn">
              <span className="dark-blue" style={{ fontFamily: "Trirong, sans-serif" }}>Empower Your </span>
              <span
                className="rounded-5 p-2 dark-blue"
                style={{ fontFamily: "Trirong, sans-serif" }}
              >
                Home
              </span>
            </p>
          </div>

          <div class="position-absolute start-50 translate-middle d-inline-block description">
            <p className="fs-3 text-white cssanimation fadeIn">
              <span className="medium-blue" style={{ fontFamily: "Trirong, sans-serif"}}>
                Smart Solutions for Modern Living.
              </span>
            </p>
            <button className="btn btn-success mx-10 center cssanimation blurIn">
              <span className="">Get Started</span>
            </button>

            <div className="position-absolute top-100 start-100 translate-middle d-inline-block">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home2;
