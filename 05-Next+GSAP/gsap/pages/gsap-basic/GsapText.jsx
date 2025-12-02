import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapText = () => {
  // TODO: Implement gsap text animation

  useGSAP(() => {
    gsap.to('#text', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    });

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.1,
    }
  );
  }, []);

  return (
    <main className="gsap-basic-container">
      <h1 id="text" className="opacity-0 translate-y-10">
        GSAP Text Animation
      </h1>

      <p className="para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </main>
  );
};

export default GsapText;