import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0">
        {/* Premier beam */}
        <motion.div
          animate={{
            y: ["0%", "-50%", "0%"],
            x: ["0%", "10%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-[40rem] w-[40rem] translate-x-[10rem] translate-y-[-20rem]"
          style={{
            background: "conic-gradient(from 90deg at 50% 50%, #4169E1, #8B5CF6, #4169E1)",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />

        {/* Deuxième beam */}
        <motion.div
          animate={{
            y: ["0%", "50%", "0%"],
            x: ["0%", "-10%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 h-[35rem] w-[35rem] translate-x-[10rem] translate-y-[10rem]"
          style={{
            background: "conic-gradient(from 45deg at 50% 50%, #4169E1, #EC4899, #4169E1)",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />

        {/* Troisième beam */}
        <motion.div
          animate={{
            y: ["0%", "30%", "0%"],
            x: ["0%", "20%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 h-[30rem] w-[30rem] translate-y-[15rem] -translate-x-[10rem]"
          style={{
            background: "conic-gradient(from 180deg at 50% 50%, #4169E1, #34D399, #4169E1)",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.7,
          }}
        />

        {/* Grille de points */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Overlay pour contrôler l'intensité */}
        <div className="absolute inset-0 bg-black opacity-85" />
      </div>
    </div>
  );
};

export default BackgroundBeams; 