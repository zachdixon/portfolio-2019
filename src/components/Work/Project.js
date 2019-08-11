import React from "react";
import styles from "./Work.module.scss";
import Button from "components/Button";

const Project = ({ title, about, tech, achievement, resources, images }) => (
  <article className={styles.project}>
    <Button to="/work">All Projects</Button>

    <div className={styles.projectImage}>
      <img src={require(`images/${images[0]}`)} alt="Project" />
    </div>
    <div className={styles.projectInfo}>
      <header>
        <h2 className={styles.projectTitle}>{title}</h2>
      </header>
      <div>
        <h3>About</h3>
        {about}
      </div>
      <div>
        <h3>Tech Stack</h3>
        <ul>
          {tech.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      {achievement ? (
        <div>
          <h3>Achievement</h3>
          <p>{achievement}</p>
        </div>
      ) : null}
      {resources ? (
        <div>
          <h3>Resources</h3>
          {resources.map(resource => (
            <p key={resource}>resource</p>
          ))}
        </div>
      ) : null}
    </div>
  </article>
);

export default Project;
