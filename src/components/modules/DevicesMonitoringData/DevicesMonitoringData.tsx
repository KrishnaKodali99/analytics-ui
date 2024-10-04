import styles from "./DevicesMonitoringData.module.css";

import {
  AVERAGE_MONITOR_DURATION,
  DATA_COLLECTION_TIME,
  FIREWALL_MONITORING_ATTRIBUTES,
  LAST_ANALYSIS_COMPLETION_TIME,
  LAST_FORCED_MONITORING_TIME,
  LAST_MONITORING_CYCLE_GAP,
  LAST_MONITORING_DURATION,
  MONITORING_DURATION,
  MONITORING_TIME,
  MONITOR_CYCLES_COMPLETED,
} from "../../../constants";
import { TextBox } from "../../elements";
import { getDateFromEpochWithHM } from "../../../utils";

export interface IDevicesMonitoringData {
  deviceName: string;
  dataCollectionDuration: number;
  monitorLogicDuration: number;
  averageMonitorCycleDuration: number;
  lastMonitorCycleDuration: number;
  lastMonitoringCycleGap: number;
  lastForcedMonitorCycleCompletionTime: string;
  lastAnalysisCompletionTime: string;
  numOfMonitorCyclesSkipped: number;
}

export const DevicesMonitoringData = (props: IDevicesMonitoringData) => {
  const {
    dataCollectionDuration,
    monitorLogicDuration,
    averageMonitorCycleDuration,
    lastMonitorCycleDuration,
    lastMonitoringCycleGap,
    lastForcedMonitorCycleCompletionTime,
    lastAnalysisCompletionTime,
    numOfMonitorCyclesSkipped,
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <span className={styles.monitorDurationHeading}>
          {MONITORING_DURATION}
        </span>
        <hr />
        <div className={styles.monitorDurationContainer}>
          <div className={styles.monitoringContent}>
            <TextBox
              className={styles.flexWrap}
              heading={AVERAGE_MONITOR_DURATION}
              text={averageMonitorCycleDuration?.toString() + " min"}
            />
            <TextBox
              className={styles.flexWrap}
              heading={LAST_MONITORING_DURATION}
              text={lastMonitorCycleDuration?.toString() + " min"}
            />
          </div>
          <div className={styles.monitoringContent}>
            <TextBox
              className={styles.flexWrap}
              heading={MONITORING_TIME}
              text={monitorLogicDuration?.toString() + " min"}
            />
            <TextBox
              className={styles.flexWrap}
              heading={DATA_COLLECTION_TIME}
              text={dataCollectionDuration?.toString() + " min"}
            />
          </div>
        </div>
      </div>
      <div className={styles.dataContainer}>
        <span className={styles.monitorDurationHeading}>
          {FIREWALL_MONITORING_ATTRIBUTES}
        </span>
        <hr />
        <div className={styles.monitoringContent}>
          <TextBox
            className={styles.flexWrap}
            heading={LAST_FORCED_MONITORING_TIME}
            text={getDateFromEpochWithHM(lastForcedMonitorCycleCompletionTime)}
          />
          <TextBox
            className={styles.flexWrap}
            heading={LAST_ANALYSIS_COMPLETION_TIME}
            text={getDateFromEpochWithHM(lastAnalysisCompletionTime)}
          />
        </div>
        <div className={styles.monitoringContent}>
          <TextBox
            className={styles.flexWrap}
            heading={LAST_MONITORING_CYCLE_GAP}
            text={lastMonitoringCycleGap?.toString() + " min"}
          />
          <TextBox
            className={styles.flexWrap}
            heading={MONITOR_CYCLES_COMPLETED}
            text={numOfMonitorCyclesSkipped?.toString()}
          />
        </div>
      </div>
    </div>
  );
};
