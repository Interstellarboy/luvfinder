import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import hero from "./assets/hero.png";
import doge from "./assets/dogecoin.png";

function AosAnimation() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div class="main-container p-10 md:container md:mx-auto sm:mx-auto">
      <div className="flex">
        {/* AosAnimation
      <div className="this">this</div>
      <div data-aos="fade-right">this</div>
       */}
        <div data-aos="fade-right">
          <h1 className="text-5xl text-left font-bold m-7 ">
            Top Memes Tokens by Market Capitalization
          </h1>
          <h1 className="text-2xl text-left text-lime-400 mx-7">
            This page lists the top meme coins and tokens. These projects are
            listed by market capitalization with the largest first and then
            descending in order.
          </h1>
        </div>
        <div data-aos="fade-left">
          <img src={hero} alt="" className="container-sm m-auto" />
        </div>
      </div>

      <div className="flex justify-between m-7 " data-aos="fade-up">
        <div className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000 ">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>

        {/*  */}
        <h1 className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </h1>
        {/*  */}
        <h1 className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3 text-lime-400 font-bold">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Best Price to Trade
          </h4>
          <h5 className="font-bold">0.1272927229 %</h5>
          <h5 className="text-xs p-2 ">
            Average DOGE/USD net price including commission
          </h5>
          <h6>Last 5 mins</h6>
        </h1>
        <h1 className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </h1>
        <h1 className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </h1>
      </div>
    </div>
  );
}

export default AosAnimation;
