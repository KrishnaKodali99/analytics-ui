import styles from "./DevicesTrafficAnalytics.module.css";

import {
  DEVICE_NAME,
  LOG_TYPE,
  PROCESSED_LOGS,
  UNPROCESSED_LOGS,
} from "../../../constants";
import { DevicesTrafficData, IDevicesTrafficData } from "../index";
import { ImageSortIcon } from "../../elements";

import { useState } from "react";

interface IDevicesTrafficAnalyticsProps {
  devicesTrafficData?: IDevicesTrafficData[];
}

export const DevicesTrafficAnalytics = (props: IDevicesTrafficAnalyticsProps): JSX.Element => {
  const [deviceNameSort, setDeviceNameSort] = useState<boolean>(false);
  const [logTypeSort, setLogTypeSort] = useState<boolean>(false);
  const [processedLogsSort, setProcessedLogsSort] = useState<boolean>(false);
  const [unprocessedLogsSort, setUnprocessedLogsSort] = useState<boolean>(false);
  
  const { devicesTrafficData } = props;

  const handleDeviceNameSort = (): void => {
    setDeviceNameSort((sort: boolean) => !sort);
    devicesTrafficData?.sort((data1, data2) => {
      const val1: string = (deviceNameSort)? data1?.deviceName: data2?.deviceName || "";
      const val2: string = (deviceNameSort)? data2?.deviceName: data1?.deviceName || "";
      return val1.localeCompare(val2);
    });
  };

  const handleLogTypeSort = (): void => {
    setLogTypeSort((sort: boolean) => !sort);
    devicesTrafficData?.sort((data1, data2) => {
      const val1: string = (logTypeSort)? data1?.logType: data2?.logType || "";
      const val2: string = (logTypeSort)? data2?.logType: data1?.logType || "";
      return val1.localeCompare(val2);
    });
  };

  const handleProcessedLogsSort = (): void => {
    setProcessedLogsSort((sort: boolean) => !sort);
    devicesTrafficData?.sort((data1, data2) => {
      const val1: number = (processedLogsSort)? data1?.processedLogs: data2?.processedLogs || 0;
      const val2: number = (processedLogsSort)? data2?.processedLogs: data1?.processedLogs || 0;
      return val1 - val2;
    });
  };

  const handleUnprocessedLogsSort = (): void => {
    setUnprocessedLogsSort((sort: boolean) => !sort);
    devicesTrafficData?.sort((data1, data2) => {
      const val1: number = (unprocessedLogsSort)? data1?.unprocessedLogs: data2?.unprocessedLogs;
      const val2: number = (unprocessedLogsSort)? data2?.unprocessedLogs: data1?.unprocessedLogs;
      return val1 - val2;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableHeader}>
        <span className={styles.tableHeading} onClick={handleDeviceNameSort}>
          {DEVICE_NAME}
          <ImageSortIcon isSort={deviceNameSort} />
        </span>
        <span className={styles.tableHeading} onClick={handleLogTypeSort}>
          {LOG_TYPE}
          <ImageSortIcon isSort={logTypeSort} />
        </span>
        <span className={styles.tableHeading} onClick={handleProcessedLogsSort}>
          {PROCESSED_LOGS}
          <ImageSortIcon isSort={processedLogsSort} />
        </span>
        <span className={styles.tableHeading} onClick={handleUnprocessedLogsSort}>
          {UNPROCESSED_LOGS}
          <ImageSortIcon isSort={unprocessedLogsSort} />
        </span>
      </div>
      {(devicesTrafficData?.map((deviceData: IDevicesTrafficData, index: number) => (
        <DevicesTrafficData key={index} {...deviceData}/>
      )))}
    </div>
  );
};
