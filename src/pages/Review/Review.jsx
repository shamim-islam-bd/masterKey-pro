import React, { useEffect, useState } from "react";

export default function Review() {
  const [hotdeals, setHotdeals] = useState([]);

  useEffect(() => {
    fetch("./phondata.json")
      .then((res) => res.json())
      .then((data) => {
        setHotdeals(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="font-bold border-dashed border-b-2 border-[#FFAE5D] mb-4">
        Review your Purches
      </h1>
      <div className="flex justify-around gap-10">
        {hotdeals.map((hotdeal) => (
          <div
            className="rounded-lg border border-radius-2 flex justify-center items-center p-10"
            key={hotdeal._id}
          >
            <div className="w-[235px]">
              <img className="p-6" src={hotdeal.picture} alt="" />
            </div>
            <div className="w-[200px] text-sm">
              <h1 className="text-2xl font-bold">{hotdeal.name}</h1>
              <p className="text-red-600">- {hotdeal.discount}% off</p>
              <p className="text-1xl font-bold">$ {hotdeal.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
