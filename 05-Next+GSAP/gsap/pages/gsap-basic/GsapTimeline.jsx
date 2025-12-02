import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#yellow-box", {
      x: 250,
      rotation: 360,
      borderRadius: "100%",
      duration: 2,
      ease: 'back.inOut',
    });

    timeline.to('#yellow-box', {
      y: 250,
      scale: 2,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    });

    timeline.to('#yellow-box', {
      x: 500,
      scale: 1,
      rotation: 360,
      borderRadius: "8px",
      duration: 2,
      ease: "back.inOut",
    }, []);
  })
  return (
    <main className="gsap-basic-container">
      <h1>GSAP Timeline</h1>

      <p>
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p>
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p>
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <div className="flex justify-center">
          <button onClick={() => {
            if(timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}>Play/Pause</button>
        </div>

        <div className="flex justify-center">
          <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg shadow-lg" />
        </div>
      </div>
    </main>
  );
};

export default GsapTimeline;