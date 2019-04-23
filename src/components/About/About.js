import React from "react";
import styles from "./About.module.scss";
import Fade from "react-reveal/Fade";
import Page from "components/Page";

export default function About(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <div className={styles.contentInner}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.intro}>
          Hi, my name is Zachary Dixon. I'm a front-end developer with over 7
          years of professional experience. I'm comfortable with JavaScript
          (React, Meteor), HTML, and CSS. I love learning new things and I'm not
          afraid of diving head-first into the unknown.
        </p>
        <div className={styles.timeline}>
          <Entry date="2012" title="My First Job!">
            I landed my first developer job just before I graduated at a startup
            called SocialCompass. I started out building landing pages and
            emails.
          </Entry>
          <Entry right date="2012" title="Graduated (Finally)">
            I originally started out at University of North Texas as a Music
            Performance major (clarinet) but ended up switching half way
            through. I graduated from University of Phoenix with a B.S. in IT
            and Web Development in 2012.
          </Entry>
          <Entry date="2013" title="Backbone, Ember, Meteor. Oh My!">
            I started playing around with jQuery and quickly found myself in the
            endless space of JavaScript frameworks. I started learning every
            framework I could on my off-time and was hooked.
          </Entry>
          <Entry right date="2013" title="Promotion">
            I worked my way into a JavaScript developer role at the same
            company, although now known as HipLogiq.
          </Entry>
          <Entry date="2014" title="Exploration">
            I decided it was time to try something different, and went to work
            for a large corporation called JDSU as a Senior JavaScript
            Developer.
          </Entry>
          <Entry right date="2015" title="Freedom">
            Working remote was all the rage for developers, and I wanted to be a
            part of it. I accepted a position back at HipLogiq (now
            SocialCentiv) as the Lead Front End Developer and was allowed to
            work remotely a few days a week, eventually moving to fully remote.
            My dream job.
          </Entry>
          <Entry date="Present" title="To be continued...">
            Although I'm still the Lead Front End Developer at now Respondology,
            I've learned more than I could have imagined when I started this
            journey. I'm excited to see where the future leads.
          </Entry>
        </div>
      </div>
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
  return (
    <Fade {...fadeProps} delay={300}>
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
    </Fade>
  );
};
