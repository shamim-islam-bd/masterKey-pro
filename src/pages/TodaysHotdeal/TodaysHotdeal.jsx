import React, { useEffect, useState } from "react";
// import furniture from "../../assets/furniture.jpg";
import "./TodaysHotdeal.css";

export default function TodaysHotdeal() {
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
  const hotdealsSlice = hotdeals.slice(0, 5);
  return (
    <div className="container my-20">
      <div className="container my-10">
        <div className="items-center justify-center">
          <h1 className="font-bold border-dashed border-b-2 border-[#FFAE5D] mb-4 p-4">
            Todays Hot deals.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {hotdealsSlice.length > 0 &&
              hotdealsSlice.map((hotdeal) => (
                <div className="flex md:grid" key={hotdeal._id}>
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

      <div className="relative">
        <div className="bg-pic">
          {/* <div className=""> */}
          {/* <img src={furniture} alt="" srcset="" /> */}
          <h1 className="absolute inset-0 color-[#A29781]">Special Offer on</h1>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
