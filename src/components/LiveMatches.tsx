import team1 from "../assets/team1.png";
import team3 from "../assets/team3.png";
import { IoIosRadio } from "react-icons/io";

const LiveMatches = () => {
  return (
    <div className="shadow-md border border-t-gray-100 w-6/12 bg-white rounded-xl p-2 ">
      <div className="flex pb-2">
        <div className="px-2 w-8/12 p-1  rounded-3xl text-xs   bg-purple-100 text-primary-color">
          Champions League 24
        </div>
        <button className="text-xs w-3/12 bg-red-500 rounded-3xl justify-center items-center py-1 mx-auto text-white flex">
          <IoIosRadio className="mr-2" /> Live
        </button>
      </div>

      <div className="flex justify-between items-center px-2">
        <div className="">
          <img src={team1} className="w-12 h-12" alt="" />
          <p className="text-md text-center">TISB </p>
        </div>
        <div className="flex text-xs font-semibold text-center justify-center items-center">
          <span className="text-xl">1</span>
          <span className="text-gray-400 px-2">Final</span>
          <span className="text-xl">0</span>
        </div>
        <div className="">
          <img src={team3} className="w-12 h-12" alt="" />

          <p className="text-md">Harrow </p>
        </div>
      </div>
    </div>
  );
};

export default LiveMatches;
