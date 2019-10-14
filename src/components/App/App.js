import React from "react";
import styles from "./App.module.scss";
import { useWindowSize } from "hooks";
import { MobileContext } from "context";
import Mobile from "layouts/Mobile";
import Desktop from "layouts/Desktop";

const App = props => {
  const size = useWindowSize();
  const isMobile = size.width < 1024;

  return (
    <MobileContext.Provider value={{ isMobile }}>
      <div className={styles.app}>{isMobile ? <Mobile /> : <Desktop />}</div>
    </MobileContext.Provider>
  );
};

export default App;
