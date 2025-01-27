import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
      >
        <div className="container">
          <a className="navbar-brand" href="#"><img src="imgs/logo.png" alt="" /></a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto gap-3 fw-bold mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link " href="#" aria-current="page"
                  >Used Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Auctions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">New Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sell Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Local Dealers</a>
              </li>
              <li className="nav-item signUpBtn">
                <a className="nav-link" href="#">
                <i className="bi bi-person-fill"></i>
                <span>Sign Up</span></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar