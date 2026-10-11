"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-start justify-center px-6 md:px-20 mt-32 md:mt-38 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col items-start gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box inline-flex items-center gap-2 rounded-full border border-[#7042f88b] bg-[#0b0b2d]/80 px-4 py-2 shadow-[0_0_20px_rgba(124,58,237,0.25)] opacity-[0.9] w-fit"
        >
          <SparklesIcon className="h-4 w-4 text-[#c5b3ff]" />
          <span className="text-[13px] font-medium tracking-[0.08em] text-[#e8e2ff] uppercase">
            Fullstack Developer Portfolio
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[700px] w-auto leading-[0.95]"
        >
          <span>
            Ratchanon{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Panchuen
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-5 max-w-[700px] leading-relaxed"
        >
            ผมนักศึกษาชั้นปีที่ 4 สาขาวิศวกรรมคอมพิวเตอร์ มีความสนใจด้าน Robot {"&"} Automation
          มีประสบการณ์ในการเขียนโปรแกรมด้วย Python และ PLC รวมถึงการพัฒนาระบบด้วย Arduino และ
          SolidWorks เป็นคนมีความรับผิดชอบต่องานที่ทำ เรียนรู้สิ่งใหม่ได้รวดเร็ว และพร้อมพัฒนาทักษะเพื่อเติบโต
          ในสายงานวิศวกรรมและเทคโนโลยี
        </motion.p>
      </div>
    </motion.div>
  );
};
