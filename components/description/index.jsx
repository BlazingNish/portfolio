import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Description = () => {
  const phrases = [
    "Hi there!",
    "I'm Nishant Emmanuel Ekka",
    "A Full Stack Developer",
    "I like to build things",
    "And play games in my free time 😄",
  ];
  return (
    <div className={styles.description}>
      {phrases.map((phrase, index) => {
        return <AnimateText key={index}>{phrase}</AnimateText>;
      })}
    </div>
  );
};

const AnimateText = ({ children }) => {
  const text = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    });
    return () => ctx.revert();
  }, []);
  return <p ref={text}>{children}</p>;
};
export default Description;
