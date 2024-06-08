import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";

const UpcomingMatches = () => {
  return (
    <div className="shadow-md w-6/12 border border-t-gray-100 bg-white rounded-xl p-2 ">
      <div className="p-1  text-center rounded-3xl text-sm w-full  bg-purple-100 text-primary-color">
        U15 Champions League
      </div>
      <div className="flex justify-between items-center p-2">
        <div className="">
          <img src={team1} className="w-12 h-12" alt="" />
          <p className="text-md">TISB U15</p>
        </div>
        <div className="flex text-xs font-semibold text-center flex-col">
          <span className="text-red-400">04:00PM</span>
          <span className="text-gray-400">10 APR</span>
          <span className="text-amber-500 rounded-3xl bg-amber-100 px-2">
            7-A-Side
          </span>
        </div>
        <div className="">
          <img src={team2} className="w-12 h-12" alt="" />

          <p className="text-md">CIS U15</p>
        </div>
      </div>
      <div className="text-center text-gray-400 text-xs">
        TISB Basketball Court
      </div>
    </div>
  );
};

export default UpcomingMatches;
