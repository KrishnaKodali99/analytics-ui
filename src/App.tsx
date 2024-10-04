import styles from "./App.module.css";

import { AsmsAnalytics } from "./pages";

const App = (): JSX.Element => {
  return (
    <div className={styles.app}>
        <AsmsAnalytics/>
    </div>
  );
};

export default App;
