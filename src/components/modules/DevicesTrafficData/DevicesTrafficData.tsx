import styles from "./DevicesTrafficData.module.css";

export interface IDevicesTrafficData {
  deviceName: string;
  logType: string;
  processedLogs: number;
  unprocessedLogs: number;
}

export const DevicesTrafficData = (props: IDevicesTrafficData): JSX.Element => {
  const { deviceName, logType, processedLogs, unprocessedLogs } = props;
  return (
    <div className={styles.container}>
      <span className={styles.tableContent}>{deviceName}</span>
      <span className={styles.tableContent}>{logType}</span>
      <span className={styles.tableContent}>{processedLogs?.toLocaleString()}</span>
      <span className={styles.tableContent}>{unprocessedLogs?.toLocaleString()} </span>
    </div>
  );
};
