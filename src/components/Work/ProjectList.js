import React, { useState } from "react";
import { Link } from "react-router-dom";
import Visibility from "react-visibility-sensor";
import { Spring } from "react-spring/renderprops";
import styles from "./Work.module.scss";
import projects from "./projects";

const ProjectThumb = ({ title, slug, images }) => {
  const [sensorActive, setSensorActive] = useState(true);
  return (
    <Visibility
      active={sensorActive}
      onChange={(isVisible) => {
        isVisible && setSensorActive(false);
      }}
    >
      {({ isVisible }) => (
        <Spring
          to={{
            opacity: isVisible ? 1 : 0,
          }}
        >
          {(props) => (
            <Link
              className={styles.projectThumb}
              to={`/work/${slug}`}
              style={props}
            >
              <img src={images[0].thumbnail} alt={title} />
            </Link>
          )}
        </Spring>
      )}
    </Visibility>
  );
};

const ProjectList = (props) => (
  <div className={styles.projectList}>
    {projects.map((project) => (
      <ProjectThumb key={project.title} {...project} />
    ))}
  </div>
);

export default ProjectList;
