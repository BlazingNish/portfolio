import Image from "next/image";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const Index = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: true,
          start: "top",
          end: "+=500px",
        },
      });
      timeline
        .from(background.current, { clipPath: `inset(15%)` })
        .to(introImage.current, { height: "200px" }, 0);
    });
    return ()=> ctx.revert();
  }, []);

  const background = useRef(null);
  const introImage = useRef(null);
  return (
    <div className={styles.homeHeader}>
      <div className={styles.backgroundImage} ref={background}>
        <Image
          src={"/images/backgroundImage.jpg"}
          fill={true}
          alt='background image'
          priority={true}
        />
      </div>
      <div className={styles.intro}>
        <div
          ref={introImage}
          data-scroll
          data-scroll-speed='0.3'
          className={styles.introImage}
        >
          <Image
            src={"/images/intro_img.jpg"}
            fill={true}
            alt='background Image'
          />
        </div>
        <h1 data-scroll data-scroll-speed='0.7'>
          Nishant Emmanuel Ekka
        </h1>
      </div>
    </div>
  );
};

export default Index;
