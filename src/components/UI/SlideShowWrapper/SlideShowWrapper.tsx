import React, { FC, useEffect, useState, ReactNode, useRef, forwardRef, } from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { useWindowSize } from "usehooks-ts";

gsap.registerPlugin(ScrollTrigger)
interface SlideShowProps {
  children: ReactNode;
  endValue: number;
  endToStart?: boolean;
  startAnimation: number | "start" | "bottom" | "center";
  startScrollAnimation: number | "start" | "bottom" | "center";
  endAnimation: number | "start" | "bottom" | "center";
  endScrollAnimation: number | "start" | "bottom" | "center";
  animationDuration: number | true;
  direction: "x" | "y";
}

export const SlideShowWrapper: FC<SlideShowProps> = forwardRef<HTMLDivElement, SlideShowProps>(
  ({ children, endValue, endToStart, startAnimation, startScrollAnimation, endScrollAnimation, endAnimation, animationDuration, direction }, ref) => {

    const [value, setValue] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);
  let _startAnimation: string;
  let _startScrollAnimation: string;
  let _endAnimation: string;
  let _endScrollAnimation: string;

  const {width} = useWindowSize();

  useEffect(() => {
    setValue(1440 - width);
  }, [width]);

  if (typeof startAnimation === "number") {
    _startAnimation = `${startAnimation}px`;
  } else {
    _startAnimation = startAnimation;
  }
  if (typeof startScrollAnimation === "number") {
    _startScrollAnimation = `${startScrollAnimation}px`;
  } else {
    _startScrollAnimation = startScrollAnimation;
  }
  if (typeof endAnimation === "number") {
    _endAnimation = `${endAnimation}px`;
  } else {
    _endAnimation = endAnimation;
  }
  if (typeof endScrollAnimation === "number") {
    _endScrollAnimation = `${endScrollAnimation}px`;
  } else {
    _endScrollAnimation = endScrollAnimation;
  }

  useEffect(() => {
    const slideElement = slideRef.current;
    let exactLength = value;

    if (exactLength < 0) {
      exactLength = 0;
    }

    const slideShowAnimation = gsap.fromTo(
      slideElement && slideElement,
      {[direction]: 0},
      {
        [direction]: endToStart ? -endValue - exactLength : -endValue,
        ease: "none",
        scrollTrigger: {
          trigger: slideElement && slideElement,
          start: `${_startAnimation} ${_startScrollAnimation}`,
          end: `${_endAnimation} ${_endScrollAnimation}`,
          scrub: animationDuration,
          markers: false,
          immediateRender: false,
        },
      }
    );
    return () => {
      slideShowAnimation.kill();
    };
  }, [
    value,
    _endAnimation,
    _endScrollAnimation,
    _startAnimation,
    _startScrollAnimation,
    slideRef,
    animationDuration,
    endValue,
    endToStart,
    direction,
  ]);

  return (
    <div ref={ref}>{React.cloneElement(children as any, { ref: slideRef })}</div>
  )
})