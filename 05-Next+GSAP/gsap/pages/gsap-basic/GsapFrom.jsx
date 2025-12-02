import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {

    useGSAP(() => {
    gsap.from('#green-box', {
      x: 300,
      repeat: -1,  // infinte
      yoyo: true,  // reverse
      rotation: 360,
      duration: 2,
      // ease: 'elastic',
      ease: 'power1.inOut',
    })
  })

  return (
    <main className="gsap-basic-container">
      <h1>GSAP From() Method</h1>

      <p>
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p>
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p>
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 flex justify-center">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg shadow-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;