import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapStagger = () => {

  useGSAP(() => {
    gsap.to('.stagger-box', {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      // stagger: 0.5,
      stagger: {
        amount: 1.5,
        grid: [2,1],
        axis: 'y',
        ease: 'circle.inOut',
        from: 'center',
      }
    });
  }, []);

  return (
    <main className="gsap-basic-container">
      <h1>GSAP Stagger</h1>

      <p>
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p>
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p>
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20 flex justify-center">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box shadow-lg" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box shadow-lg" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;