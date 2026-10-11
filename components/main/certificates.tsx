"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromTop } from "@/lib/motion";

type Certificate = {
  title: string;
  file: string;
  preview: string;
};

const CERTIFICATES: Certificate[] = [
  {
    title: "การออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้",
    file: "/certificates/หลักสูตร การออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้.pdf",
    preview: "/certificates/หลักสูตร การออกแบบประสบการณ์ผู้ใช้และส่วนติดต่อผู้ใช้.png",
  },
  {
    title: "หลักสูตร PLC ระดับ ๑",
    file: "/certificates/หลักสูตร PLC ระดับ ๑ .pdf",
    preview: "/certificates/หลักสูตร PLC ระดับ ๑ .png",
  },
  {
    title: "การรับส่งข้อมูลผ่าน MQTT และการสร้าง Dashboard",
    file: "/certificates/การรับส่งข้อมูลผ่าน MQTT และการสร้าง Dashboard.pdf",
    preview: "/certificates/การรับส่งข้อมูลผ่าน MQTT และการสร้าง Dashboard.png",
  },
  {
    title: "Python Essentials 1",
    file: "/certificates/PythonEssentials1.pdf",
    preview: "/certificates/PythonEssentials1.png",
  },
];

function PdfThumbnail({ preview, title }: { preview: string; title: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] bg-[#0a0a2e] rounded-lg overflow-hidden border border-[#2A0E61]">
      {error && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm px-4 text-center">
          ไม่สามารถแสดง {title} ได้
        </div>
      )}

      {!error && (
        <img
          src={preview}
          alt={title}
          className="block h-full w-full object-cover"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, CERTIFICATES.length - cardsPerView);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const card = container.children.item(index);
      if (!(card instanceof HTMLElement)) return;
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    },
    []
  );

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.max(0, prev - 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = Math.min(maxIndex, prev + 1);
      scrollToIndex(next);
      return next;
    });
  }, [maxIndex, scrollToIndex]);

  return (
    <section
      id="certificates"
      className="relative flex w-full flex-col items-start justify-center px-6 py-6 md:px-20 md:py-8"
    >
      <div className="mb-5 w-full md:mb-6">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#7042f88b] bg-[#0b0b2d]/80 px-4 py-2 shadow-[0_0_20px_rgba(124,58,237,0.25)]">
            <SparklesIcon className="h-4 w-4 text-[#c5b3ff]" />
            <span className="text-[13px] font-medium tracking-[0.08em] text-[#e8e2ff] uppercase">
              Certificates
            </span>
          </div>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-white md:text-[44px]">
            Certificates
          </h2>
          <p className="mt-2 max-w-[600px] text-base text-gray-400">
            ใบเกียรติบัตรและใบรับรองที่ได้รับจากการเรียนรู้และการฝึกอบรม
          </p>
        </motion.div>
      </div>

      <div className="relative w-full">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#7042f88b] bg-[#030014cc] backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 hover:bg-purple-500/20 hover:border-purple-500 cursor-pointer"
          }`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex >= maxIndex}
          className={`absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-[#7042f88b] bg-[#030014cc] backdrop-blur-md flex items-center justify-center transition-all duration-300 ${
            currentIndex >= maxIndex
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 hover:bg-purple-500/20 hover:border-purple-500 cursor-pointer"
          }`}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`flex-shrink-0 ${
                cardsPerView === 1
                  ? "w-full"
                  : cardsPerView === 2
                    ? "w-[calc(50%-12px)]"
                    : "w-[calc(33.333%-16px)]"
              }`}
            >
              <div className="group relative rounded-xl border border-[#2A0E61] bg-[#0a0a2e]/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)]">
                <button
                  type="button"
                  onClick={() => window.open(cert.file, "_blank", "noopener,noreferrer")}
                  className="w-full text-left"
                  aria-label={`Open certificate ${cert.title}`}
                >
                  <div className="p-4">
                    <PdfThumbnail preview={cert.preview} title={cert.title} />
                  </div>

                  <div className="px-4 pb-4">
                    <h3 className="text-white font-semibold text-lg group-hover:text-purple-300 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="mt-2 inline-flex items-center text-sm text-purple-300 hover:text-purple-200">
                      ดู PDF
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8 gap-2">
          <span className="text-gray-400 text-sm">
            {currentIndex + 1} / {CERTIFICATES.length} certificates
          </span>
        </div>

        <div className="flex items-center justify-center mt-3 gap-2">
          {CERTIFICATES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                  const next = Math.min(index, maxIndex);
                  setCurrentIndex(next);
                  scrollToIndex(next);
                }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index >= currentIndex && index < currentIndex + cardsPerView
                  ? "bg-purple-500 w-6"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
