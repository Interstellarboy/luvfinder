import React from "react";
import twitter from "./assets/twitter.svg";

function Nav() {
  return (
    <div className="text-l z-10 w-10 sticky top-0 bg-white mt-9 mb-7 flex md:container md:mx-auto justify-between ">
      <h5
        style={{ paddingRight: "300px" }}
        className="text-3xl m-6 pr-10 text-lime-400 grow"
      >
        LU❤️FINDER
      </h5>
      <h5 className="m-6">Market</h5>
      <h5 className="m-6">
        <select
          style={{ background: "#FFB31F", borderRadius: 10, color: "white" }}
          name="colorpick"
          id="colorpick"
        >
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
      </h5>
      <h5 className="m-6">Home</h5>
      <h5 className="m-6">
        <select
          style={{ background: "#FFB31F", borderRadius: 10, color: "white" }}
          name="colorpick"
          id="coinpicker"
        >
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
      </h5>
      <h5 className="m-6 bg-blue-400 flex rounded-md h-6 ">
        Connect <img src={twitter} alt="" className="w-3 h-7 bg-white" />
      </h5>
    </div>
  );
}

export default Nav;
