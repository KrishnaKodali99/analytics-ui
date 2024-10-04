import styles from "./MemoryAnalytics.module.css";
import cx from "classnames";

import {
  BASE_URL,
  RAM_USED,
  SERVICES_MEMORY_ENDPOINT,
  SERVICES_MEMORY_UTILIZATION,
  SERVICE_MEMORY_METRICS,
  SYSTEM_MEMORY_UTILIZATION,
} from "../../../constants";

import { ServicesAnalytics } from "../ServiceAnalytics";
import { SystemAnalytics } from "../SystemAnalytics";

import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingIcon } from "../../elements";

interface IMemoryAnalyticsProps {
  className?: string;
}

export const MemoryAnalytics = (props: IMemoryAnalyticsProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  const [servicesData, setServicesData] = useState<any[]>([]);
  const [systemData, setSystemData] = useState<Object>({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}${SERVICES_MEMORY_ENDPOINT}`)
      .then((response: any) => {
        if (response?.status === 200) {
          const memoryUsageData: any[] = response?.data;
          const usage: number =
            memoryUsageData?.find((data: any) => data?.name === RAM_USED)
              ?.usage || 0;

          setServicesData(
            memoryUsageData?.filter((data: any) => data?.name !== RAM_USED) ||
              []
          );
          setSystemData({ usage });
        }
        setLoading(false);
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const { className } = props;

  return (
    <div className={cx(styles.container, className)}>
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          <div className={styles.analyticsContainer}>
            <div className={styles.heading}>{SERVICES_MEMORY_UTILIZATION}</div>
            <ServicesAnalytics
              servicesData={servicesData}
              dataURL={SERVICE_MEMORY_METRICS}
            />
          </div>
          <div>
            <div className={styles.heading}>{SYSTEM_MEMORY_UTILIZATION}</div>
            <SystemAnalytics
              systemData={systemData}
              utilityHeading={RAM_USED}
              dataURL={SERVICE_MEMORY_METRICS}
            />
          </div>
        </>
      )}
    </div>
  );
};
