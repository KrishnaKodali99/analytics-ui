import styles from "./AnalyticsHeader.module.css";
import cx from "classnames";

import { ASMS_ANALYTICS } from "../../../constants";

export const AnalyticsHeader = () => {
  return (
    <header className={cx(styles.container, styles.containerAttributes)}>
      {ASMS_ANALYTICS}
    </header>
  );
};
