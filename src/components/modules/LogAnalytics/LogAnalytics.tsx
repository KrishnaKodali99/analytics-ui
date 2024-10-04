import styles from "./LogAnalytics.module.css";

import { BarGraph, TextBox } from "../../elements";
import {
  AUDIT_LOGS,
  LOG_STATISTICS,
  SYSLOG_ANALYTICS,
  TOTAL_LOGS_RECEIVED,
} from "../../../constants";

import { useEffect, useState } from "react";

interface ILogAnalytics {
  totalLogsReceived?: number;
  auditLogsReceived?: number;
}
export const LogAnalytics = (): JSX.Element => {
  const [logAnalyticsData, setLogAnalyticsData] = useState<ILogAnalytics>({});

  useEffect(() => {
    setLogAnalyticsData({
      totalLogsReceived: 1017291,
      auditLogsReceived: 7872,
    });
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.heading}>{SYSLOG_ANALYTICS}</span>
      <div className={styles.graphContainer}>
        <BarGraph />
      </div>
      <span className={styles.heading}>{LOG_STATISTICS}</span>
      <div className={styles.statisticsContainer}>
        <TextBox
          heading={TOTAL_LOGS_RECEIVED}
          text={logAnalyticsData?.totalLogsReceived?.toLocaleString() || ""}
        />
        <TextBox
          heading={AUDIT_LOGS}
          text={logAnalyticsData?.auditLogsReceived?.toLocaleString() || ""}
        />
      </div>
    </div>
  );
};
