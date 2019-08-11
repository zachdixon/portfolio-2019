import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import styles from "./Work.module.scss";
import Page from "components/Page";
import ProjectList from "./ProjectList";
import Project from "./Project";
import projects from "./projects";

export default function Work(props) {
  return (
    <Page
      {...props}
      linkBackgroundColor={styles.linkBackgroundColor}
      linkTextColor={styles.linkTextColor}
      pageBackgroundColor={styles.pageBackgroundColor}
    >
      <main className={styles.content}>
        <section>
          <header>
            <h1 className={styles.title}>Work</h1>
          </header>
          <Switch>
            <Route path="/work" component={ProjectList} exact />
            {projects.map(project => (
              <Route
                key={project.slug}
                path={`/work/${project.slug}`}
                render={() => <Project {...project} />}
                exact
              />
            ))}
            <Route render={() => <Redirect to="/work" />} />
          </Switch>
        </section>
      </main>
    </Page>
  );
}
