import React, { useState } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";

//We click on a button to change the behaviour of another element. For this we use AnimationControls
//We import it and declare, than attach it in the animate propertuy of the element we want to control
const AnimationControls = () => {
  const flipControls = useAnimationControls();

  const handleClick = () => {
    flipControls.start("flip");
  };

  return (
    <div className="container">
      <motion.button className="btn" onClick={handleClick}>
        Click me to effect another element
      </motion.button>

      <motion.div
        className="square"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        whileHover="flip"
        initial="initial"
        animate={flipControls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;
