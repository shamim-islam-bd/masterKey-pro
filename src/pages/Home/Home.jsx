import React from "react";
// import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <button className="flex justify-center btn-primary">
          {/* <CiLocationOn /> */}
          Dhaka, 1222
        </button>
        <input
          type="text"
          placeholder="Search for products..."
          className="srch"
        />
      </div>
      <div className="menu mt-8">
        <div className="container mx-auto">
          <div className="flex justify-between"></div>
          <ul className="text-sm flex justify-between ">
            <li>Fresh</li>
            <li>Todays Deal</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
            <li>Menu 5</li>
            <li>Menu 6</li>
            <li>Menu 7</li>
            <li>Menu 8</li>
            <li>Menu 6</li>
            <li>Menu 7</li>
            <li>Menu 8</li>
            <li>Menu 7</li>
            <li>Menu 8</li>
            <li>Menu 9</li>
            <li>Menu 10</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
