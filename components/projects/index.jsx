import Image from "next/image";
import styles from "./styles.module.css";
import gsap from "gsap";
import { useLayoutEffect, useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Converse",
    src: "project1.png",
  },
  {
    title: "MCQ Generator",
    src: "project2.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const container = useRef(null);
  const imageContainer = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: imageContainer.current,
        pin: true,
        start: "top-=100px",
        end: document.body.offsetHeight - window.innerHeight - 50,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div ref={container} className={styles.projects}>
      <div className={styles.projectDescription}>
        <div ref={imageContainer} className={styles.imageContainer}>
          <Image
            src={`/images/${projects[selectedProject].src}`}
            fill={true}
            alt='project image'
            priority={true}
          />
        </div>
        <div className={styles.column}>
          <p>Projects</p>
        </div>
      </div>

      <div className={styles.projectList}>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => {
                setSelectedProject(index);
              }}
              className={styles.projectEl}
            >
              <h2>{project.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
