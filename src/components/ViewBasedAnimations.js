import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

//WAY 1
const ViewBasedAnimations = () => {
  return (
    <>
      <div style={{ height: "150vh" }}></div>

      <motion.div
        style={{ height: "100vh", background: "black" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "backInOut" }}
      ></motion.div>
    </>
  );
};

//WAY 2 - using useInView  hook
// const ViewBasedAnimations = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <>
//       <div style={{ height: "150vh" }}></div>

//       <motion.div
//         style={{ height: "100vh", background: "black" }}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1, ease: "backInOut" }}
//       >
//         <div
//           ref={ref}
//           style={{
//             height: "100vh",
//             background: isInView ? "blue" : "red",
//             transition: "1s background",
//           }}
//         ></div>
//       </motion.div>
//     </>
//   );
// };

export default ViewBasedAnimations;
