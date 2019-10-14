import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";

const Home = lazy(() => import("components/Home"));

export default function Mobile() {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<div>Loading...</div>}>
          <Home title="home" path="/" active={true} />
        </Suspense>
      </ScrollToTop>
    </Router>
  );
}
