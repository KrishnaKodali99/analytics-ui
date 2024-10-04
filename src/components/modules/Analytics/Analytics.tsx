import styles from "./Analytics.module.css";

import { CPUAnalytics } from "../CPUAnalytics";
import {
  LOG_ANALYTICS,
  CPU_USAGE,
  MEMORY_USAGE,
  TRAFFIC_LOG_ANALYTICS,
  MONITORING_ANALYTICS,
} from "../../../constants";

import {
  LogAnalytics,
  MemoryAnalytics,
  MonitoringAnalytics,
  TrafficLogAnalytics,
} from "../index";

interface IAnalyticsProps {
  activeComponent: string;
}

export const Analytics = (props: IAnalyticsProps): JSX.Element => {
  const { activeComponent } = props;

  return (
    <div className={styles.container}>
      {activeComponent === CPU_USAGE && <CPUAnalytics />}
      {activeComponent === MEMORY_USAGE && <MemoryAnalytics />}
      {activeComponent === MONITORING_ANALYTICS && <MonitoringAnalytics />}
      {activeComponent === TRAFFIC_LOG_ANALYTICS && <TrafficLogAnalytics />}
      {activeComponent === LOG_ANALYTICS && <LogAnalytics />}
    </div>
  );
};
