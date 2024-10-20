import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light border-top">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 mb-4">
            <Link to="/" className="d-flex align-items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="me-3"
                height="64"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Resources</h5>
            <ul className="list-unstyled">
              {/* ======================================================================================== */}
              {/* in sab ki jaga link daal dena baad main to route it  */}

              <li className="mb-2">
                <div className="text-dark text-decoration-none">Home</div>
              </li>
              <li>
                <div className="text-dark text-decoration-none">About</div>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Follow Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="https://github.com/KALP1210"
                  className="text-dark text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <div className="text-dark text-decoration-none">Discord</div>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="text-dark text-decoration-none">
                  Privacy Policy
                </div>
              </li>
              <li>
                <div className="text-dark text-decoration-none">
                  Terms & Conditions
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex justify-content-between align-items-center">
          <span className="text-muted">
            © 2024{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="text-dark text-decoration-none"
            >
              kalprambhia
            </a>
            . All Rights Reserved.
          </span>
          <div className="d-flex gap-3">
            <Link to="#" className="text-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M8.94 5.5H7.82v-.76c0-.36.34-.43.53-.43h.54V3h-.8a1.64 1.64 0 0 0-1.8 1.8v.7H5v1.5h1v4h1.82v-4h.74L8.94 5.5z" />
              </svg>
            </Link>
            <Link to="#" className="text-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.278-.007-.416A6.68 6.68 0 0 0 16 3.542a6.615 6.615 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.574 6.574 0 0 1-2.084.796 3.286 3.286 0 0 0-5.598 2.992A9.325 9.325 0 0 1 1.114 2.91a3.286 3.286 0 0 0 1.015 4.381A3.323 3.323 0 0 1 .64 7.03v.04a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.059 3.287 3.287 0 0 0 3.067 2.279A6.588 6.588 0 0 1 0 13.54a9.29 9.29 0 0 0 5.026 1.465" />
              </svg>
            </Link>
            <Link to="#" className="text-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.13-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.55.82 1.26.82 2.13 0 3.07-1.87 3.75-3.65 3.95.29.25.55.73.55 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
