import gsap from "gsap";

const DEF = { duration: 0.4, ease: "power1.inOut" };

// Animate the vertical line in from the top
export const VerticalLineIn = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { y: -100 }, { y: 0 });
};

// Animate the vertical line out from the bottom
export const VerticalLineOut = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { y: 0 }, { y: 100 });
};

// Animate the horizontal line in from the right to left
export const HorizontalLineInRight = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { x: 100 }, { x: 0 });
};

// Animate the horizontal line in from the left to right
export const HorizontalLineInLeft = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { x: -100 }, { x: 0 });
};

// Animate the horizontal line out the left side
export const HorizontalLineOutLeft = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { x: 0 }, { x: -100 });
};

// Animate the horizontal line out the right side
export const HorizontalLineOutRight = (
  ref: React.RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { x: 0 }, { x: 100 });
};

// Animate the curve in clockwise
export const rotateCurveCWIn = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { rotate: -45 }, { rotate: 45 });
};

// Animate the curve out clockwise
export const rotateCurveCWOut = (ref: React.RefObject<HTMLDivElement>) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { rotate: 45 }, { rotate: 135 });
};

// Animate the curve in counter clockwise
export const rotateCurveCounterCWIn = (
  ref: React.RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { rotate: 45 }, { rotate: -45 });
};

// Animate the curve in counter clockwise
export const rotateCurveCounterCWOut = (
  ref: React.RefObject<HTMLDivElement>
) => {
  const tl = gsap.timeline({ defaults: DEF });

  return tl.fromTo(ref.current, { rotate: -45 }, { rotate: -135 });
};
