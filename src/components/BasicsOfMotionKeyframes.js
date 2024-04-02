import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BasicsOfMotionKeyFrames = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="container">
      <motion.button
        layout //this smothly moves the button  into its place
        onClick={() => setIsVisible(!isVisible)}
        className="btn"
      >
        Show / Hide
      </motion.button>
      {/* when we remove the div, the poplayout property directly pops it out  */}
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }} //initial state
            //going state
            animate={{
              rotate: "180deg",
              scale: 1,

              //these are keyframes in a single line
              y: [0, 150, -150, -150, 0],
            }}
            //transition properties :
            transition={{
              duration: 1,
              //   type: "spring", //similar like easing function but automatic one
              ease: "easeIn", //this is more manual

              //manual timing
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            //when the component  leaves/unmounts it goes back to 0 degree: for this we use <AnimatePresence>
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            className="square"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BasicsOfMotionKeyFrames;
