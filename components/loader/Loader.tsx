"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  HorizontalLineInLeft,
  HorizontalLineInRight,
  HorizontalLineOutLeft,
  HorizontalLineOutRight,
  VerticalLineIn,
  VerticalLineOut,
  rotateCurveCWIn,
  rotateCurveCWOut,
  rotateCurveCounterCWIn,
  rotateCurveCounterCWOut,
} from "./animation";

export default function Loader() {
  const loaderWrapperRef = useRef(null);
  const verticalLineRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const bottomRightCurveRef = useRef(null);
  const topRightCurveRef = useRef(null);
  const topLeftCurveRef = useRef(null);
  const bottomLeftCurveRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.delay(0.4)
      // .repeatDelay(0.4)
      .set(verticalLineRef.current, { y: -100 })
      .set(horizontalLineRef.current, { x: 100 })
      .set(bottomRightCurveRef.current, { rotate: -45 })
      .set(bottomLeftCurveRef.current, { rotate: 45 })
      .set(topLeftCurveRef.current, { rotate: 45 })
      .set(topRightCurveRef.current, { rotate: -45 })
      .set(loaderWrapperRef.current, { opacity: 1 })

      .add(VerticalLineIn(verticalLineRef))
      .add(rotateCurveCWIn(bottomRightCurveRef))
      .add(HorizontalLineInRight(horizontalLineRef))
      .add(rotateCurveCounterCWIn(topLeftCurveRef))
      .add(VerticalLineOut(verticalLineRef), "<")
      .add(VerticalLineIn(verticalLineRef))
      .add(rotateCurveCWOut(bottomRightCurveRef), "<")
      .add(HorizontalLineOutLeft(horizontalLineRef))
      .add(rotateCurveCounterCWIn(bottomLeftCurveRef), "<")
      .add(HorizontalLineInLeft(horizontalLineRef))
      .add(rotateCurveCounterCWOut(topLeftCurveRef), "<")
      .add(rotateCurveCWIn(topRightCurveRef))
      .add(VerticalLineOut(verticalLineRef), "<")
      .add(rotateCurveCounterCWOut(bottomLeftCurveRef))
      .add(HorizontalLineOutRight(horizontalLineRef))
      .add(rotateCurveCWOut(topRightCurveRef));
  }, []);

  return (
    <div
      ref={loaderWrapperRef}
      className="relative opacity-0 translate-y-[50vh] top-[-50px] translate-x-[50vw] left-[-50px] w-[100px] h-[100px] overflow-hidden"
    >
      <div
        ref={verticalLineRef}
        className="bg-my-dark w-1 h-[100px] absolute left-[48px]"
      ></div>
      <div
        ref={horizontalLineRef}
        className="bg-my-dark h-1 w-[100px] absolute top-[48px]"
      ></div>
      <div
        ref={bottomRightCurveRef}
        className="border-[4px] border-l-my-dark border-transparent w-[100px] h-[100px] rounded-full absolute left-[50px] top-[50px]"
      ></div>
      <div
        ref={topLeftCurveRef}
        className="border-[4px] border-b-my-dark border-transparent w-[100px] h-[100px] rounded-full absolute left-[-50px] top-[-50px]"
      ></div>
      <div
        ref={bottomLeftCurveRef}
        className="border-[4px] border-r-my-dark border-transparent w-[100px] h-[100px] rounded-full absolute left-[-50px] top-[50px]"
      ></div>
      <div
        ref={topRightCurveRef}
        className="border-[4px] border-b-my-dark border-transparent w-[100px] h-[100px] rounded-full absolute left-[50px] top-[-50px]"
      ></div>
    </div>
  );
}
