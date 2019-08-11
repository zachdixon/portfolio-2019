import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { usePrevious } from "hooks";
import ScrollToTop from "components/ScrollToTop";
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
    routes.find(route => {
      return (
        location.pathname.includes(route.name) ||
        route.path === location.pathname
      );
    })
  );
  return routes.map(({ name, path, component: Component }) => {
    return (
      <Component
        key={name}
        title={name}
        path={path}
        active={
          path === "/"
            ? location.pathname === "/"
            : location.pathname.includes(path)
        }
        direction={
          routes.findIndex(route => route.name === name) >
          routes.findIndex(route => route.name === prevPage)
            ? "right"
            : "left"
        }
      />
    );
  });
});

export default function Desktop(props) {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}
