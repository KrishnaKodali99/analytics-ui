import styles from "./TrafficLogAnalytics.module.css";
import cx from "classnames";

import {
  DEVICE_TRAFFIC_DATA,
  DISK_READ_SPEED,
  FILES_READ,
  INVALID_ENTRIES,
  SIZE_PROCESSED,
  TRAFFIC_LOG_ANALYTICS_HEADING,
  VALID_ENTRIES,
} from "../../../constants";
import { TextBox } from "../../elements";
import { DevicesTrafficAnalytics } from "../index";

import { useEffect, useState } from "react";

export const TrafficLogAnalytics = (): JSX.Element => {
  const [devicesTrafficData, setDevicesTrafficData] = useState<any[]>();

  useEffect(() => {
    setDevicesTrafficData([
    {
      deviceName: "172_30_41_12",
      logType: "Source",
      processedLogs: 120120,
      unprocessedLogs: 21
    },
    {
      deviceName: "fortigate_device",
      logType: "Destination",
      processedLogs: 1221209,
      unprocessedLogs: 561
    },
    {
      deviceName: "172_30_41_12",
      logType: "Service",
      processedLogs: 2910,
      unprocessedLogs: 7821
    },
    {
      deviceName: "172_30_41_12",
      logType: "Source",
      processedLogs: 120120,
      unprocessedLogs: 21
    },
    {
      deviceName: "fortigate_device",
      logType: "Destination",
      processedLogs: 1221209,
      unprocessedLogs: 561
    },
    {
      deviceName: "172_30_41_12",
      logType: "Service",
      processedLogs: 2910,
      unprocessedLogs: 7821
    },
    {
      deviceName: "172_30_41_12",
      logType: "Source",
      processedLogs: 120120,
      unprocessedLogs: 21
    },
    {
      deviceName: "fortigate_device",
      logType: "Destination",
      processedLogs: 1221209,
      unprocessedLogs: 561
    },
    {
      deviceName: "172_30_41_12",
      logType: "Service",
      processedLogs: 2910,
      unprocessedLogs: 7821
    }
  ]);
  }, []);

  return (
    <div className={styles.container}>
      <>
        <div className={styles.heading}>{TRAFFIC_LOG_ANALYTICS_HEADING}</div>
        <div className={styles.trafficLogAnalytics}>
          <div className={cx(styles.systemStats, styles.marginBottom)}>
            <TextBox heading={FILES_READ} text={(100).toLocaleString()} />
            <TextBox heading={SIZE_PROCESSED} text="100 GB" />
            <TextBox heading={DISK_READ_SPEED} text="100 MB/sec" />
          </div>
          <div className={styles.systemStats}>
            <TextBox heading={VALID_ENTRIES} text={(219102).toLocaleString()} />
            <TextBox heading={INVALID_ENTRIES} text={(2091).toLocaleString()} />
          </div>
        </div>
      </>
      <>
        <div className={styles.heading}>{DEVICE_TRAFFIC_DATA}</div>
        <DevicesTrafficAnalytics devicesTrafficData={devicesTrafficData}/>
      </>
    </div>
  );
};
