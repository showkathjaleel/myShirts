import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";
const Home = () => {
  const snap = useSnapshot(state);
  return (
    //enables animation of components that have removed from tree
    <AnimatePresence>
      {/* if we are currently in home page */}
      {snap.intro && (
        //div has some motion attached to it
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              className="w-8 h-8 object-contain"
              src="threejs.png"
              alt="logo"
            />
          </motion.header>

          <motion.div className="home-content " {...headContainerAnimation}>
          <motion.div className="home-content " {...headTextAnimation}>
          <h1 className="head-text">
            LET'S <br className="xl:block hidden"/> DO IT.
          </h1>
          </motion.div>
          </motion.div>

          <motion.div  {...headContentAnimation} className="flex flex-col gap-5">
            <p className="max-w-md text-base text-gray-600">
              Create your unique and exclusive shirt with our brand-new 3-D customization tool . <strong>
                Unleash your imagination 
              </strong>  {" "} and define your own  style
            </p>
          </motion.div>
          <CustomButton 
          type="filled"
          title="Customize it"
          handleClick={()=>state.intro=false}
          customStyle="w=fit px-4 py-2.5 font-bold text-sm"
          />
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
