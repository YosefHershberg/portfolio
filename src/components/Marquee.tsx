import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

export const reviews = [
  {
    name: "Ethan Carter",
    username: "@ethanC",
    body: "Yosef's programming skills are unmatched. The way he optimizes code for efficiency is truly amazing. I’ve never seen anyone like him.",
    img: "https://avatar.vercel.sh/ethanC",
  },
  {
    name: "Sophia Bennett",
    username: "@sophiaB",
    body: "I’m blown away by Yosef’s ability to create clean, scalable code. His attention to detail and problem-solving skills leave me speechless.",
    img: "https://avatar.vercel.sh/sophiaB",
  },
  {
    name: "Liam Thompson",
    username: "@liamT",
    body: "Yosef's knack for efficient algorithms and clean architecture is incredible. He’s the developer you always want on your team.",
    img: "https://avatar.vercel.sh/liamT",
  },
  {
    name: "Olivia Martinez",
    username: "@oliviaM",
    body: "I’ve worked with many developers, but Yosef stands out with his efficiency and ability to turn ideas into reality quickly and effectively.",
    img: "https://avatar.vercel.sh/oliviaM",
  },
  {
    name: "Benjamin Wright",
    username: "@benW",
    body: "Yosef’s programming is on another level. His ability to break down complex problems and deliver results is awe-inspiring.",
    img: "https://avatar.vercel.sh/benW",
  },
  {
    name: "Emma Johnson",
    username: "@emmaJ",
    body: "Yosef's expertise in full-stack development is phenomenal. He’s always ahead of the curve, delivering efficient and innovative solutions.",
    img: "https://avatar.vercel.sh/emmaJ",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
}
