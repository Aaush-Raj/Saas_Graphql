import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";

const Header = () => {
  return (
    <div className=" h-full w-full sticky justify-between bg-white flex text-white">
      <div className="flex justify-between items-center my-2 custom-bg-gradient2 text-gray-700 font-semibold px-4 text-sm rounded-md ml-10">
        <IoIosSearch className="text-xl" />
        <input
          type="text"
          placeholder="Search"
          className="p-2 active:border-none focus:border-none focus-visible:border-none focus-visible:outline-none bg-transparent "
        />
      </div>

      <div className="flex text-blue-500 my-2 px-4 justify-between items-center ">
        <div className="flex justify-between items-center px-2 ">
          <img
            src="https://blog-pixomatic.s3.appcnt.com/image/22/01/26/61f166e1377d4/_orig/pixomatic_1572877223091.png"
            alt="profile_img"
            className="rounded-full w-8 "
          />
          <div className="px-2">
            <p className="text-xs -mb-2 font-semibold">Aaush Raj</p>
            <span className="text-[10px] -mt-4  font-normal ">Frontend Dev</span>{" "}
          </div>
        </div>
        <div className="bg-sky-100 text-xl relative cursor-pointer rounded-full p-2 mx-2">
          <IoIosNotificationsOutline />
          <span className="absolute top-[4px] font-bold text-blue-700    rounded-full text-xs right-[10px] bg-sky-100 ">4</span>
        </div>
        <div className="bg-sky-100  cursor-pointer rounded-full p-[10px]">
          <BsChatLeftText />
        </div>
      </div>
    </div>
  );
};

export default Header;
