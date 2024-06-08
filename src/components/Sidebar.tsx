import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { IoHomeOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { MdLiveTv } from "react-icons/md";
import { SlBookOpen, SlGlobe } from "react-icons/sl";
import { BiLogoMagento } from "react-icons/bi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate();

  const [sideBarOpen, setSideBarOpen] = useState<boolean>(true);

  // useEffect(() => {
  //   navigate("/");
  // }, [navigate]);

  const sideBarRoutes: any = [
    { to: "/", name: "Home", icon: <IoHomeOutline /> },
    { to: "matches", name: "Matches", icon: <CiTrophy /> },
    { to: "tournament", name: "Tournament", icon: <SlGlobe /> },
    { to: "syllabus", name: "Syllabus", icon: <SlBookOpen /> },
    { to: "live", name: "Live", icon: <MdLiveTv /> },
  ];

  const navLinkCssClasses = ({ isActive }: { isActive: boolean }): string => {
    return `flex text-white pl-2 sidebar-navlink  text-base py-3 items-center    rounded-l-md ${
      isActive ? " !text-primary-color font-semibold custom-bg-gradient" : ""
    }`;
  };
  console.log(sideBarOpen);

  return (
    <div className="flex h-screen">
      <motion.div
        animate={{ width: sideBarOpen ? "200px" : "50px" }}
        transition={{ duration: 0.5, type: "spring" }}
        className=" rounded-r-xl sticky  bg-primary-color text-white  "
      >
        <nav>
          <div className="h-20 pt-5">
            <h1 className="text-3xl flex items-center justify-around  font-semibold text-center ">
              {/* <BiLogoMagento /> */}
              {sideBarOpen && "SaaS"}
              <IoReorderThreeOutline
                className="cursor-pointer "
                onClick={() => setSideBarOpen(!sideBarOpen)}
              />
            </h1>
          </div>
          <ul>
            {sideBarRoutes.map((route: any) => (
              <li className="mb-4 text-center pl-2">
                <NavLink to={route.to} className={navLinkCssClasses}>
                  <div className={`${sideBarOpen ? "text-3xl" : "text-3xl "}`}>
                    {route.icon}
                  </div>
                  {sideBarOpen && (
                      <motion.div
                        initial={{ x: -10 }}
                        animate={{x : 0 }}
                        exit={{x:-100}}
                        transition={{type:"spring",duration:0.5}}
                        className=""
                      >
                        {route.name}
                      </motion.div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <div className="w-full h-full flex flex-col">
        <div className="h-14">
          <Header />
        </div>
        <div className="w-full h-screen  overflow-y-scroll  custom-bg-gradient2 shadow-xl px-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
