import React from "react";

function Type() {
  return (
    <>
      <div>
        <p className=" mb-1 filter-label">Type</p>
        <select className=" fw-semibold filter-select w-100">
          <option>Used Car</option>
          <option>New Car</option>
          <option>Modified Car</option>
        </select>
      </div>
    </>
  );
}
function Make() {
  return (
    <>
      <div>
        <p className=" mb-1 filter-label">Make</p>
        <select className=" fw-semibold filter-select w-100">
          <option>Infiniti</option>
          <option>Honda</option>
          <option>Ford</option>
        </select>
      </div>
    </>
  );
}
function Year() {
  return (
    <>
      <div>
        <p className=" mb-1 filter-label">Year</p>
        <select className=" fw-semibold filter-select w-100">
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>
    </>
  );
}
function Model() {
  return (
    <>
      <div>
        <p className=" mb-1 filter-label">Model</p>
        <select className=" fw-semibold filter-select w-100">
          <option>Sport 4A</option>
          <option>Mustang</option>
          <option>Hybrid</option>
        </select>
      </div>
    </>
  );
}
function Price() {
  return (
    <>
      <div>
        <p className=" mb-1 filter-label">Price</p>
        <select className=" fw-semibold filter-select w-100 ">
          <option>$60,000</option>
          <option>$80,000</option>
          <option>$110,000</option>
        </select>
      </div>
    </>
  );
}
function Filter() {
  return (
    <>
      <div className=" container pb-5">
        <h3 className=" text-center text-md-start py-5 fw-bold fs-2">Which vehicles you are looking for? </h3>
        <div className="filter d-flex flex-column flex-lg-row gap-4 gap-md-5 justify-content-between  px-2 py-3 shadow rounded-4">
          <Type />
          <Make />
          <Year />
          <Model />
          <Price />
          <button className="btn btn-primary d-flex gap-2 justify-content-center align-items-center   align-self-lg-center btn-2 px-3">
            <i className="bi bi-search"></i>Search
          </button>
        </div>
      </div>
    </>
  );
}

export default Filter;
