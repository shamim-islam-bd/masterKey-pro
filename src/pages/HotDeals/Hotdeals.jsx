import React, { useEffect, useState } from "react";

export default function Hotdeals() {
  const [hotdeals, setHotdeals] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setHotdeals(data);
        console.log(data);
      });
  }, []);

  //   console.log(hotdeals.length);

  // slice first 6 items from hotdeals
  const hotdealsSlice = hotdeals.slice(0, 6);

  return (
    <div className="container my-10">
      <div className="flex items-center justify-center">
        <div className="w-[548px]">
          <p className="text-7xl">
            We picked some <span className="text-[#FFAE5D]">cool things</span>{" "}
            for you!
          </p>
        </div>
        <div className="w-[878px]">
          <h1 className="font-bold border-dashed border-b-2 border-[#FFAE5D] mb-4">
            Hot deals for you
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {hotdealsSlice.length > 0 &&
              hotdealsSlice.map((hotdeal) => (
                <div className="" key={hotdeal._id}>
                  <div className="w-[200px]">
                    <img src={hotdeal.picture} alt="" />
                  </div>
                  <div className="w-[200px] text-sm">
                    <h1>{hotdeal.name}</h1>
                    <p className="text-red-600">- {hotdeal.discount}% off</p>
                    <p>{hotdeal.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
