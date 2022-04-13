import React from "react";
// import "./Tables.css";
import bit from "./assets/bit.png";
import ok from "./assets/ok.png";

function Tables() {
  return (
    <div data-aos="fade-up" className="p-10">
      <table id="customers">
        <thead>
          <tr>
            <th>#</th>
            <th>Platform</th>
            <th>LTC</th>
            <th>Bid %</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className="flex">
              <img src={bit} className="w-7 h-7" alt="" /> Blockchain.com
            </td>
            <td>$ 0.134</td>
            <td>0.286997 %</td>
            <td>$65,697.23</td>
          </tr>
          <tr>
            <td>2</td>
            <td className="flex">
              <img src={ok} className="w-7 h-7" alt="" /> Okcoin
            </td>
            <td> $ 0.135075</td>
            <td> 0.120006 %</td>
            <td> $240,252.36</td>
          </tr>
          <tr>
            <td>3</td>
            <td className="flex">
              <img src={bit} className="w-7 h-7" alt="" /> Blockchain.com
            </td>
            <td>$ 0.134</td>
            <td>0.286997 %</td>
            <td>$65,697.23</td>
          </tr>
          <tr>
            <td>4</td>
            <td className="flex">
              <img src={bit} className="w-7 h-7" alt="" /> Blockchain.com
            </td>
            <td>$ 0.134</td>
            <td>0.286997 %</td>
            <td>$65,697.23</td>
          </tr>
          <tr>
            <td>5</td>
            <td className="flex">
              <img src={bit} className="w-7 h-7" alt="" /> Blockchain.com
            </td>
            <td>$ 0.134</td>
            <td>0.286997 %</td>
            <td>$65,697.23</td>
          </tr>
          <tr>
            <td>6</td>
            <td className="flex">
              <img src={bit} className="w-7 h-7" alt="" /> Blockchain.com
            </td>
            <td>$ 0.134</td>
            <td>0.286997 %</td>
            <td>$65,697.23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tables;
