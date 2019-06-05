import React, { Suspense, lazy } from "react";
import styles from "./Desktop.module.scss";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { usePrevious } from "hooks";
const Home = lazy(() => import("components/Home"));
const About = lazy(() => import("components/About"));
const Work = lazy(() => import("components/Work"));
const Blog = lazy(() => import("components/Blog"));
const Contact = lazy(() => import("components/Contact"));

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "about", path: "/about", component: About },
  { name: "work", path: "/work", component: Work },
  { name: "blog", path: "/blog", component: Blog },
  { name: "contact", path: "/contact", component: Contact }
];

const Routes = withRouter(({ history, location }) => {
  const prevPage = usePrevious(
    routes.find(route => route.path === location.pathname).name
  );
  return routes.map(({ name, path, component: Component }) => (
    <Component
      key={name}
      title={name}
      path={path}
      active={location.pathname === path}
      direction={
        routes.findIndex(route => route.name === name) >
        routes.findIndex(route => route.name === prevPage)
          ? "right"
          : "left"
      }
    />
  ));
});

export default function Desktop(props) {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </Router>
  );
}
