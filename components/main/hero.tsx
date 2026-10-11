import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div id="about-me" className="relative flex flex-col h-full w-full overflow-hidden pt-0">
      <video
        autoPlay
        muted
        loop
        style={{
          maskImage: "linear-gradient(to top, black 0%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 88%, transparent 100%)",
        }}
        className="rotate-180 absolute top-[-250px] left-1/2 -translate-x-1/2 w-[150%] max-w-[1900px] h-[620px] object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
