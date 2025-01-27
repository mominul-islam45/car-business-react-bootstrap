import Carousel from "react-bootstrap/Carousel";
import React from "react";

function Hero() {
  return (
    <>
      <Carousel data-bs-theme="dark" indicators={false} className="py-5">
        <Carousel.Item>
          <div className="container text-center slide">
            <p>Meet your new car</p>
            <h2>Honda Civic Type R</h2>
            <div className="pt-3 pb-5">
              <button className="btn btn-outline-secondary btn-1 me-4">More Details</button>
              <button className="btn btn-primary btn-2">Test Drive</button>
            </div>
          </div>
          <div>
            <img className=" w-100" src="imgs/Header Image.png" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container text-center slide">
            <p>Test your new car</p>
            <h2>Tesla model 3</h2>
            <div className="pt-3 pb-5">
              <button className="btn btn-outline-secondary btn-1 me-4">More Details</button>
              <button className="btn btn-primary btn-2">Test Drive</button>
            </div>
          </div>
          <div className=" d-flex justify-content-center align-items-center">
            <img className=" w-75 " src="imgs/seaden.png" alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container text-center slide">
            <p>Buy your new car</p>
            <h2>Ford Mustang F100</h2>
            <div className="pt-3 pb-5">
              <button className="btn btn-outline-secondary btn-1 me-4">More Details</button>
              <button className="btn btn-primary btn-2">Test Drive</button>
            </div>
          </div>
          <div className=" d-flex justify-content-center align-items-center ">
            <img className=" w-75" src="imgs/suv.png" alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero;
