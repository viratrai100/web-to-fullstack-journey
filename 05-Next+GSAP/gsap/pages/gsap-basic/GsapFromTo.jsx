import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {

  useGSAP(() => {
    gsap.fromTo('#red-box', {
      x: 0,
      rotation: 0,
      borderRadius: "0%",
    },
     {
      x: 300,
      repeat: -1,  // infinte
      yoyo: true,  // reverse
      borderRadius: "100%",
      rotation: 360,
      duration: 2,
      ease: 'bounce.out',
    })
  }, [])

  return (
    <main className="gsap-basic-container">
      <h1>GSAP FromTo() Method</h1>

      <p>
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p>
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p>
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 flex justify-center">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg shadow-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;