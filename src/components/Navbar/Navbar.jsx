import React from "react";
import { BiUserCircle } from "react-icons/bi";

export default function Navbar() {
  return (
    <div>
      <div className="navbar py-5 border-b-2 border-b-[#1e1e1eb5]">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="logo">
              <span className="font-bold">Shop</span>
              <span>cart</span>
            </div>
            <div className="menu flex items-center">
              <BiUserCircle />
              <h4> Sign In</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
