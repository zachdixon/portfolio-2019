import React from "react";

const projects = [
  {
    title: "Respondology",
    slug: "respondology",
    type: "Web Application",
    about: (
      <>
        <p>
          Frontend application for "The Mod" by Respondology, a discreet and
          personalized comment moderation tool for anyone with an online
          following.
        </p>
        <p>
          For this project, I was the lead front-end developer responsible for
          the design and development. I communicated with the back-end team to
          connect to a Rails API. I was also responsible for deploying and
          maintaining the project using Netlify.
        </p>
        <p>
          The main challenge was converting the previous front end from Meteor
          to React. Another challenge was building the special authentication
          flows for Facebook and Instagram.
        </p>
      </>
    ),
    achievement:
      "Successfully made it a Progressive Web App with a 100% score in Google's Lighthouse tool.",
    tech: [
      "React",
      "Apollo/GraphQL",
      "Styled JSX (CSS in JS)",
      "Material UI",
      "Highcharts",
      "Lodash",
      "MomentJS",
      "Storybook",
      "Netlify",
      "UI/UX Design"
    ],
    resources: [
      <a
        href="https://www.respondology.io"
        target="_blank"
        rel="noreferrer noopener"
      >
        Respondology
      </a>
    ],
    images: [
      "app.respondology.io.png",
      "app.respondology.io-1.png",
      "app.respondology.io-2.png"
    ]
  },
  {
    title: "Portfolio",
    slug: "portfolio",
    type: "Website",
    about:
      "My own portfolio site, version two. Portfolios are a great place for developers to be creative and try things out that they normally may not be able to do on other projects. With this design, I tried to keep it simple so recruiters/interviewers can easily find what they need quickly, but also put in a few fun things in there to show my chops.",
    tech: ["React", "CSS/SCSS Modules", "Netlify", "Design"],
    images: ["portfolio.png"]
  },
  {
    title: "High Wire Computer",
    slug: "high-wire-computer",
    type: "Website",
    about: "High Wire Computer website",
    tech: ["Meteor", "Material UI", "Digital Ocean", "Design"],
    images: ["highwirecomputer.com.png"]
  },
  {
    title: "Homemovies",
    slug: "homemovies",
    type: "Web Application",
    about:
      "An application to get information about movies and create custom watchlists",
    tech: ["Meteor", "TMDB API", "Design"],
    images: ["homemovies.png"]
  },
  {
    title: "SocialCentiv",
    slug: "socialcentiv",
    type: "Web Application",
    about: "Front end web application for SocialCentiv",
    tech: ["BatmanJS", "Heroku"],
    images: ["socialcentiv.png"]
  },
  {
    title: "SocialCompass",
    slug: "socialcompass",
    type: "Web Application",
    about: "Front end web application for SocialCompass.",
    tech: ["jQuery", "Ruby on Rails", "Design", "Google Maps/Search API"],
    images: ["socialcompass.png"]
  },
  {
    title: "Clan Dixon",
    slug: "clan-dixon",
    type: "Website",
    about: "A website about my family and heritage",
    tech: ["Meteor", "Design"],
    images: ["dixon.png"]
  },
  {
    title: "Secretary",
    slug: "secretary",
    type: "Web Application",
    about:
      "An application I built to be used as a meeting organizer. The main feature was the calendar where employees could create events, reserve the conference room at the office if needed, and invite people to the meeting.",
    tech: ["Meteor", "MongoDB", "momentJS", "Heroku", "Design"],
    images: ["secretary.png"]
  },
  {
    title: "Guardrail",
    slug: "guardrail",
    type: "Web Application",
    about:
      "Guardrail was something I created to keep track of issues/bugs in our applications at SocialCentiv. You could create issues and mark the status of passing or failing. It also had the ability for other employees to create bug reports which helped with communication between teams.",
    tech: ["Meteor", "MongoDB", "Heroku", "Design"],
    images: ["guardrail.png"]
  }
  // {
  //   title: "",
  //   slug: "",
  //   about: "",
  //   achievement: "",
  //   tech: [],
  //   resources: [],
  //   images: [""]
  // }
];

export default projects;
