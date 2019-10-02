import React from "react";
import styles from "./About.module.scss";
import Fade from "react-reveal/Fade";
import Page from "components/Page";
import Tilt from "react-tilt";

const entries = [
  {
    title: "My First Job!",
    date: "2012",
    description:
      "I landed my first developer job just before I graduated at a startup called SocialCompass. I started out building landing pages and emails."
  },
  {
    title: "Graduated",
    date: "2012",
    description:
      "I originally started out at University of North Texas as a Music Performance major (clarinet) but ended up switching half way through. I graduated from University of Phoenix with a B.S. in IT and Web Development in 2012."
  },
  {
    title: "Backbone, Ember, Meteor. Oh my!",
    date: "2013",
    description:
      "I started playing around with jQuery and quickly found myself in the endless space of JavaScript frameworks. I started learning every framework I could on my off-time and was hooked."
  },
  {
    title: "Promotion",
    date: "2013",
    description:
      "I worked my way into a JavaScript developer role at the same company, although now known as HipLogiq."
  },
  {
    title: "Exploration",
    date: "2014",
    description:
      "I decided it was time to try something different, and went to work for a large corporation called JDSU as a Senior JavaScript Developer."
  },
  {
    title: "Freedom!",
    date: "2015",
    description:
      "Working remote was all the rage for developers, and I wanted to be a part of it. I accepted a position back at HipLogiq (now SocialCentiv) as the Lead Front-end Developer and was allowed to work remotely a few days a week, eventually moving to fully remote. My dream job."
  },
  {
    title: "Changing It Up",
    date: "2019",
    description:
      "Started a new job at Red Ventures, more specifically The Points Guy. New industry, new challenges."
  }
];

export default function About(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <main className={styles.contentInner}>
        <header>
          <h1 className={styles.title}>About Me</h1>
        </header>
        <p className={styles.intro}>
          Hi, my name is Zachary Dixon. I'm a front-end developer with over{" "}
          {new Date().getFullYear() - 2012} years of professional experience.
          I'm comfortable with JavaScript, HTML, and CSS. I love learning new
          things and I'm not afraid of diving head-first into the unknown.
        </p>
        <section className={styles.timeline}>
          {entries.map((entry, index) => (
            <Entry
              key={entry.title}
              date={entry.date}
              title={entry.title}
              right={index % 2 === 1}
            >
              {entry.description}
            </Entry>
          ))}
        </section>
      </main>
    </Page>
  );
}

const Entry = ({ right, date, title, children }) => {
  const fadeProps = {};
  if (!!right) {
    fadeProps.right = true;
  } else {
    fadeProps.left = true;
  }
  // const { x, y } = useMousePosition();
  // console.log(x, y);
  return (
    <Fade {...fadeProps} delay={300}>
      <Tilt>
        <div
          className={[
            styles.entry,
            styles[`entry${right ? "Right" : "Left"}`]
          ].join(" ")}
        >
          <p className={styles.entryDate}>{date}</p>
          <p className={styles.entryTitle}>{title}</p>
          <p className={styles.entryText}>{children}</p>
        </div>
      </Tilt>
    </Fade>
  );
};
