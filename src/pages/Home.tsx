import React, { useEffect, useState } from "react";
import bannerImg from "../assets/banner.png";
import UpcomingMatches from "../components/UpcomingMatches";
import LiveMatches from "../components/LiveMatches";
import { IoIosArrowRoundForward } from "react-icons/io";
import TeamsCard from "../components/TeamsCard";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const list: number[] = [0, 1, 0, 1, 0, 1, 0, 1, 0];// I know this might not be the best practice to animate this but just doing it for MVP

const FAST_DURATION: number = 25;
const SLOW_DURATION: number = 75; // when user hovers the cards , speed will be set to slow 

const Home = () => {
  let [ref, { width }] = useMeasure();

  const [duration, setDuration] = useState<number>(FAST_DURATION); 
  const [mustFinish, setMustFinish] = useState<boolean>(false); 
  const [rerender, setRerender] = useState<boolean>(false);
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPostion = -width / 2 - 8;
    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPostion], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPostion),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPostion], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <div className="py-4 ">
      <div className="flex">
        <div className="p-4 rounded-md w-5/12 bg-white ">
          <img src={bannerImg} className="w-96" alt="" />
          <h2 className="text-4xl font-semibold text-primary-color text-center my-4">
            Welcome to SaaS
          </h2>
        </div>
        <div className="flex flex-col pl-4 w-9/12 ">
          <div className=" bg-white px-2 rounded-lg ">
            <div className="flex justify-between  px-2 items-center">
              <h2 className="text-sm font-semibold text-gray-600">
                UPCOMING MATCHES
              </h2>
              <p className="flex text-primary-color cursor-pointer text-xs">
                See All <IoIosArrowRoundForward />
              </p>
            </div>
            <div className=" p-2 flex gap-2">
              <UpcomingMatches />
              <UpcomingMatches />
            </div>
          </div>
          <div className="bg-white px-2  mt-4 rounded-lg">
            <div className="flex justify-between  px-2 items-center">
              <h2 className="text-sm font-semibold text-gray-600">
                LIVE MATCHES
              </h2>
              <p className="flex text-primary-color cursor-pointer text-xs">
                See All <IoIosArrowRoundForward />
              </p>
            </div>
            <div className=" p-2  flex gap-2">
              <LiveMatches />
              <LiveMatches />
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-lg mt-4 overflow-hidden max-w-[998px] bg-gray-50 rounded-lg  ">
        <motion.div
          className="flex p-4 "
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...list, ...list].map((currId, index) => (
            <TeamsCard id={currId} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
