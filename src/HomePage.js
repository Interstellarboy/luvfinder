import React, { useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import hero from "./assets/hero.png";
import doge from "./assets/dogecoin.png";
import axios from "axios";
import bit from "./assets/bit.png";
import telegram from "./assets/telegram.svg";
import chat from "./assets/chat.png";
import "./Tables.css";

function AosAnimation() {
  const baseUrl = "https://luvfinder.luvinu.io/api/getmemeMarket/";
  // const [names, setNames] = useState([]);
  // const [ltc, setLtc] = useState([]);
  // const [bid, setBid] = useState([]);
  // const [volume, setVolume] = useState([]);
  const [checks, setChecks] = useState([]);
  const [currency, setCurrency] = useState("DOGE-USD");
  const MINUTE_MS = 60000;
  function clicks() {
    let curr = document.getElementById("that").value;
    // let coin = document.getElementById("coinpicker").value;
    let oin = document.getElementById("this").value;

    console.log(oin);
    console.log(curr);
    setCurrency(`${oin}` + `-${curr}`);
    // console.log(currency);
  }

  useEffect(() => {
    const loadPost = async () => {
      const response = await axios.get(baseUrl + `${currency}`);
      setChecks(response.data.result[0].maindata);
      // setNames(checks.name);
      // setLtc(response.data.result[0].maindata[0].last_trade_price);
      // setBid(response.data.result[0].maindata[0].bid_percentage);
      // setVolume(response.data.result[0].maindata[0].volume);
    };
    const intervals = setInterval(() => {
      loadPost();
      console.log("min");
      // console.log(currency);
    }, MINUTE_MS);
    loadPost();
  }, [currency]);
  // console.log(checks);
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="main-container p-5 w-50 ">
      <div className="flex-col lg:flex ">
        <div data-aos="fade-right">
          <h1 className="text-3xl lg:text-4xl text-left font-bold m-7 ">
            Top Memes Tokens by Market Capitalization
          </h1>
          <h1 className="text-xl lg:text-2xl text-left text-lime-400 mx-7">
            This page lists the top meme coins and tokens. These projects are
            listed by market capitalization with the largest first and then
            descending in order.
          </h1>
        </div>
        <div data-aos="fade-left" className="pl-20">
          <img src={hero} alt="" className="h-40 w-40 pr-10" />
        </div>
      </div>

      <div className="flex flex-wrap justify-between m-7 " data-aos="fade-up">
        <div className="w-full lg:w-40 shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000 ">
          <div className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </div>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>

        {/*  */}
        <div className="w-full lg:w-40 shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>
        {/*  */}
        <div className="w-full lg:w-40 shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3 text-lime-400 font-bold">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Best Price to Trade
          </h4>

          <h6>Last 5 mins</h6>
        </div>
        <div className="w-full lg:w-40 shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>
        <div className="w-full lg:w-40 shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>
      </div>
      <div className="flex justify-start">
        <select name="colorpick" id="that" onChange={clicks}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="EUR">EUR</option>
          <option value="RUB">RUB</option>
          <option value="CAKE">CAKE</option>
          <option value="BTC">BTC</option>
          <option value="BNB">BNB</option>
          <option value="ETH">ETH</option>
        </select>
        <select name="coinpicker" id="this" onChange={clicks}>
          <option value="DOGE">DOGE</option>
          <option value="SHIB">SHIB</option>
          <option value="MIM">MIM</option>
          <option value="SPELL">SPELL</option>
          <option value="BABYDOGE">BABYDOGE</option>
          <option value="ELON">HOGE</option>
          <option value="SAMO">SAMO</option>
          <option value="CATE">CATE</option>
          <option value="HOGE">HOGE</option>
          <option value="DOBO">DOBO</option>
        </select>
      </div>
      {/* tables */}
      <div data-aos="" className="overflow-x-scroll w-full">
        <table id="customers" className="sm:w-full overflow-x-scroll">
          <thead>
            <tr>
              <th>Platform</th>
              <th>LTC</th>
              <th>Bid %</th>
              <th>Volume</th>
            </tr>
          </thead>

          {checks.map((check) => (
            <tbody key={`${check.name}`}>
              <tr>
                <td className="flex">
                  <img src={bit} className="w-7 h-7" alt="" /> {check.name}
                </td>
                <td className="heading">{check.last_trade_price}</td>
                <td className="heading">{check.bid_percentage}</td>
                <td className="heading">{check.volume}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div>
        <img
          src={chat}
          alt=""
          className="fixed right-0 bottom-0 w-7 h-7 lg:hidden"
        />
        <img
          src={telegram}
          alt=""
          className=" hidden lg:fixed right-0 bottom-0 w-7 h-7 lg:block"
        />
      </div>
    </div>
  );
}

export default AosAnimation;
