import React, { useState } from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import hero from "./assets/hero.png";
import doge from "./assets/dogecoin.png";
import axios from "axios";
import bit from "./assets/bit.png";
import ok from "./assets/ok.png";
import "./Tables.css";

function AosAnimation() {
  const baseUrl = "https://luvfinder.luvinu.io/api/getmemeMarket/";
  const [names, setNames] = useState([]);
  const [ltc, setLtc] = useState([]);
  const [bid, setBid] = useState([]);
  const [volume, setVolume] = useState([]);
  const [checks, setChecks] = useState([]);
  const [currency, setCurrency] = useState("DOGE-INR");
  function clicks() {
    const curr = document.getElementById("colorpick").value;
    const coin = document.getElementById("coinpicker").value;
    setCurrency(`${coin}` + `-${curr}`);
    // console.log(currency);
  }
  const MINUTE_MS = 60000;

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
    <div className="main-container p-10 md:container md:mx-auto sm:mx-auto">
      <div className="flex">
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
          <div className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </div>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>

        {/*  */}
        <div className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>
        {/*  */}
        <div className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3 text-lime-400 font-bold">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Best Price to Trade
          </h4>
          <h5 className="font-bold">0.1272927229 %</h5>
          <h5 className="text-xs p-2 ">
            Average DOGE/USD net price including commission
          </h5>
          <h6>Last 5 mins</h6>
        </div>
        <div className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
          <h4 className="flex m-3">
            <img src={doge} alt="doge" className="h-7 w-7" />
            Dogecoin
          </h4>
          <h5 className="text-xs">Dogecoin/U.S. Dollar</h5>
          <h5 className="font-bold">0.69 %</h5>
          <h6>Last 5 mins</h6>
        </div>
        <div className="shadow-2xl p-5 hover:scale-y-110 hover:scale-110 duration-1000">
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
        <select name="colorpick" id="colorpick" onChange={clicks}>
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
        <select name="colorpick" id="coinpicker" onChange={clicks}>
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
      <div data-aos="fade-up">
        <table id="customers">
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
    </div>
  );
}

export default AosAnimation;
