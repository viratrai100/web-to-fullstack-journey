/// pages/gsapbasic/Home.jsx
import Link from "next/link";


const animations = [
  { title: "GSAP To", description: "The to() method animates...", path: "/gsap-basic/GsapTo" },
  { title: "GSAP From", description: "The from() method animates...", path: "/gsap-basic/GsapFrom" },
  { title: "GSAP FromTo", description: "The fromTo() method animates...", path: "/gsap-basic/GsapFromTo" },
  { title: "GSAP Timeline", description: "The timeline() method animates...", path: "/gsap-basic/GsapTimeline" },
  { title: "GSAP Stagger", description: "Stagger animates multiple elements...", path: "/gsap-basic/GsapStagger" },
  { title: "GSAP ScrollTrigger", description: "ScrollTrigger triggers animation on scroll...", path: "/gsap-basic/GsapScrollTrigger" },
  { title: "GSAP Text", description: "Animate text with GSAP.", path: "/gsap-basic/GsapText" },
];

export default function Home() {
  return (
    <main className="gsap-basic-container">
      <h1>GSAP Animations</h1>
      <ol className="flex flex-col gap-2">
        {animations.map((animation, index) => (
            <li key={index} className="flex flex-row gap-2 p-5 hover:bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm font-bold text-white">{index + 1}.</p>
            <div className="flex flex-col gap-2 flex-1">
              <Link href={animation.path} className="text-md font-semibold text-blue-400 hover:text-blue-300">
                {animation.title}
              </Link>
              <p className="text-gray-300 text-xs">{animation.description}</p>
            </div>
            <svg className="w-6 h-6 text-gray-600 -rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" clipRule="evenodd" d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z" />
            </svg>
          </li>
        ))}
      </ol>
    </main>
  );
}
