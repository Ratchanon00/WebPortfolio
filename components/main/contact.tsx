"use client";

import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CameraIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

import { slideInFromTop } from "@/lib/motion";

const CONTACTS = [
  {
    label: "Email",
    value: "terdnakub@gmail.com",
    href: "mailto:terdnakub@gmail.com",
    icon: EnvelopeIcon,
    iconBg: "bg-[#1d2b5e]/70",
  },
  {
    label: "GitHub",
    value: "https://github.com/Ratchanon00",
    href: "https://github.com/Ratchanon00",
    icon: GlobeAltIcon,
    iconBg: "bg-[#ffffff]/8",
  },
  {
    label: "Instagram",
    value: "@_terdxyz_",
    href: "https://www.instagram.com/_terdxyz_/",
    icon: CameraIcon,
    iconBg: "bg-[#ffffff]/8",
  },
  {
    label: "Facebook",
    value: "Ratchanon Panchuen",
    href: "https://www.facebook.com/Terd.Ratchanon",
    icon: ChatBubbleLeftRightIcon,
    iconBg: "bg-[#ffffff]/8",
  },
] as const;

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden px-6 py-6 md:px-20 md:py-8"
    >
      <video
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 32%, black 68%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 32%, black 68%, transparent 100%)",
        }}
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-25 mix-blend-screen"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/videos/skills-bg.webm" type="video/webm" />
      </video>
      <div className="relative z-10 mx-auto mb-5 w-full max-w-[1000px] md:mb-6">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-[32px] font-bold leading-tight text-white md:text-[44px]">
            Contact
          </h2>

          <p className="mt-2 max-w-[600px] text-base text-gray-400 md:text-lg">
            I&apos;m currently open to internship opportunities and collaborative projects. Feel free to reach out anytime!
          </p>
        </motion.div>

        <div className="mt-6 rounded-2xl border border-[#2A0E61] bg-[#0a0a2e]/60 p-4 backdrop-blur-sm md:p-6">
          <div className="space-y-4">
            {CONTACTS.map(({ label, value, href, icon: Icon, iconBg }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="group flex w-full items-center justify-between gap-4 rounded-xl border border-[#7042f88b] bg-[#0a0a2e]/80 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/70 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)] md:px-5"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 ${iconBg}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c2d6ff] md:text-sm">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white md:text-lg">{value}</p>
                  </div>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors group-hover:bg-white/10 md:h-11 md:w-11">
                  <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            <ArrowDownTrayIcon className="h-6 w-6" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};
