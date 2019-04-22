import React from "react";
import styles from "./App.module.scss";

import Desktop from "layouts/Desktop";

const App = props => {
  return (
    <div className={styles.app}>
      <Desktop />
    </div>
  );
};

export default App;
