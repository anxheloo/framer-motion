import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const Gestures = () => {
  return (
    <div className="container">
      {/* We use motion config to configure transition property or another for all our elements */}
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.button whileHover={{ scale: 1.2 }} className="btn">
          press me
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9, rotate: "2.5deg" }}
          className="btn"
        >
          press me 2
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;
