import styles from "./MonitoringAnalytics.module.css";

import { DevicesMonitoringAnalytics } from "../index";

import { useEffect, useState } from "react";
import { DEVICES_MONITORING } from "../../../constants";

export const MonitoringAnalytics = (): JSX.Element => {
  const [devicesData, setDevicesData] = useState<any[]>();

  useEffect(() => {
    setDevicesData([
      {
        "deviceName": "172_30_210_12",
        "lastMonitoringCycleGap": 8,
        "dataCollectionDuration": 2,
        "monitorLogicDuration": 3,
        "lastForcedMonitorCycleCompletionTime": "1700373772263",
        "lastAnalysisCompletionTime": "1700373772463",
        "averageMonitorCycleDuration": 3.2,
        "lastMonitorCycleDuration": 4,
        "numOfMonitorCyclesSkipped": 0
      },
      {
        "deviceName": "10_210_1_3",
        "lastMonitoringCycleGap": 0,
        "dataCollectionDuration": 0,
        "monitorLogicDuration": 0,
        "lastForcedMonitorCycleCompletionTime": "1700373772263",
        "lastAnalysisCompletionTime": "1700373772463",
        "averageMonitorCycleDuration": 0,
        "lastMonitorCycleDuration": 0,
        "numOfMonitorCyclesSkipped": 0
      },
      {
        "deviceName": "banco-de-chile",
        "lastMonitoringCycleGap": 0,
        "dataCollectionDuration": 0,
        "monitorLogicDuration": 0,
        "lastForcedMonitorCycleCompletionTime": "1700373772263",
        "lastAnalysisCompletionTime": "1700373772463",
        "averageMonitorCycleDuration": 0,
        "lastMonitorCycleDuration": 0,
        "numOfMonitorCyclesSkipped": 0
      },
      {
        "deviceName": "fortigate_root",
        "lastMonitoringCycleGap": 0,
        "dataCollectionDuration": 0,
        "monitorLogicDuration": 0,
        "lastForcedMonitorCycleCompletionTime": "1700373772263",
        "lastAnalysisCompletionTime": "1700373772463",
        "averageMonitorCycleDuration": 0,
        "lastMonitorCycleDuration": 0,
        "numOfMonitorCyclesSkipped": 0
      }
    ])
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        {DEVICES_MONITORING}
      </div>
      {devicesData?.map((deviceData:any, index: number) => (
        <DevicesMonitoringAnalytics key={index} deviceData={deviceData}
      />
      ))}
    </div>
  );
};
