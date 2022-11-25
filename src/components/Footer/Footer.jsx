import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#404040] py-3">
      <div className="flex justify-around my-3 text-white">
        <h1>Shopcart</h1>
        <ul className="flex gap-3">
          <li>About Us</li>
          <li>Contract</li>
          <li>Help</li>
        </ul>
        <p>English</p>
      </div>
    </div>
  );
}
