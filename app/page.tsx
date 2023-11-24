// import Loader from "@/components/loader/Loader";
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const tileWrapperRef = useRef(null);
  const tileTLRef = useRef(null);
  const tileTRRef = useRef(null);
  const tileBRRef = useRef(null);
  const tileBLRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });

    tl.fromTo(tileTLRef.current, { xPercent: -100 }, { xPercent: 0 })
      .fromTo(tileTRRef.current, { xPercent: 100 }, { xPercent: 0 })
      .fromTo(tileBLRef.current, { yPercent: 100 }, { yPercent: 0 })
      .fromTo(tileBRRef.current, { xPercent: 100 }, { xPercent: 0 })
      .fromTo(tileTRRef.current, { y: 0 }, { y: -100 })
      .fromTo(tileBRRef.current, { y: 0 }, { y: -100 }, "<");
  }, []);

  return (
    <main className="overflow-hidden">
      <div
        ref={tileWrapperRef}
        className="w-screen h-screen relative overflow-visible rotate-[45deg] translate-x-[-10vw] translate-y-[-5vh]" //rotate-[45deg] translate-x-[-10vw] translate-y-[-5vh]
      >
        <div
          ref={tileTLRef}
          className="w-screen h-screen absolute bg-slate-500 left-[-50vw] top-[-50vh]"
        ></div>
        <div
          ref={tileTRRef}
          className="w-screen h-[160vh] absolute bg-slate-600 left-[50vw] top-[-110vh]" // The top value is height - 50vh
        ></div>
        <div
          ref={tileBRRef}
          className="w-screen h-screen absolute bg-slate-800 left-[50vw] top-[50vh]"
        ></div>
        <div
          ref={tileBLRef}
          className="w-screen h-screen absolute bg-slate-700 left-[-50vw] top-[50vh]"
        ></div>
      </div>
      {/* <Loader /> */}
    </main>
  );
}
