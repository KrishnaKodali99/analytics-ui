import styles from "./DevicesMonitoringAnalytics.module.css";
import cx from "classnames";

import assets from "../../../assets";
import { DevicesMonitoringData, IDevicesMonitoringData } from "../index";

import { useState } from "react";

interface IDevicesMonitoringAnalyticsProps {
  deviceData: IDevicesMonitoringData;
  className?: string;
}

export const DevicesMonitoringAnalytics = (props: IDevicesMonitoringAnalyticsProps) => {
  const [displayDeviceData, setDisplayDeviceData ] = useState<boolean>(false);

  const onClickHandler = (): void => {
    setDisplayDeviceData((previousDisplayStatus) => !previousDisplayStatus);
  }

  const { deviceData, className } = props;

  return (
    <div className={cx(styles.container, className)} onClick={onClickHandler}>
      <div className={styles.deviceDetails}>
        <span>{deviceData?.deviceName}</span>
        {displayDeviceData ? (
          <img src={assets.DownArrowIcon} alt="Collapse" />
        ) : (
          <img src={assets.RightArrowIcon} alt="Expand" />
        )}
      </div>
      {displayDeviceData && (
        <DevicesMonitoringData {...deviceData}/>
      )}
    </div>
  );
};
