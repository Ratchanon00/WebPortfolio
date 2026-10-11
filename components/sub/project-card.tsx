import Link from "next/link";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  description: string | readonly string[];
  link: string;
  demoLink?: string;
};

export const ProjectCard = ({
  title,
  description,
  link,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl border border-[#2A0E61] bg-[#0a0a2e]/70 p-5 shadow-[0_0_30px_rgba(59,130,246,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7042f88b] hover:shadow-[0_0_36px_rgba(112,66,248,0.16)]">
      <Link href={link} target="_blank" rel="noreferrer noopener" className="block">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7042f88b] bg-[#0f1638] text-[#b9a8ff]">
              <CodeBracketIcon className="h-5 w-5" />
            </div>
          </div>

          <h3 className="text-[19px] font-semibold leading-tight text-white md:text-[22px]">
            {title}
          </h3>

          {typeof description === "string" ? (
            <p className="mt-3 text-sm leading-relaxed text-gray-300 md:text-[15px]">
              {description}
            </p>
          ) : (
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-300 md:text-[15px]">
              {description.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#2A0E61] pt-3">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[#c2d6ff] hover:text-white"
        >
          GitHub
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors group-hover:bg-white/10">
            <ArrowUpRightIcon className="h-4 w-4" />
          </span>
        </Link>
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.08em] text-[#c2d6ff] hover:text-white"
          >
            ตัวอย่าง
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors group-hover:bg-white/10">
              <ArrowUpRightIcon className="h-4 w-4" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
