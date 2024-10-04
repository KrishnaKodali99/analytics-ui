import styles from "./CPUAnalytics.module.css";
import cx from "classnames";

import { ServicesAnalytics, SystemAnalytics } from "../index";

import {
  BASE_URL,
  CPU_USED,
  SERVICES_CPU_ENDPOINT,
  SERVICES_CPU_UTILIZATION,
  SERVICE_CPU_METRICS,
  SYSTEM_CPU_UTILIZATION,
} from "../../../constants";
import { LoadingIcon } from "../../elements";

import axios from "axios";
import { useEffect, useState } from "react";

interface ICPUAnalyticsProps {
  className?: string;
}

export const CPUAnalytics = (props: ICPUAnalyticsProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(true);

  const [servicesData, setServicesData] = useState<any[]>([]);
  const [systemData, setSystemData] = useState<Object>({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}${SERVICES_CPU_ENDPOINT}`)
      .then((response: any) => {
        if (response?.status === 200) {
          const cpuUsageData: any[] = response?.data;
          const usage: number =
            cpuUsageData?.find((data: any) => data?.name === CPU_USED)?.usage ||
            0;

          setServicesData(
            cpuUsageData?.filter((data: any) => data?.name !== CPU_USED) || []
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
            <div className={styles.heading}>{SERVICES_CPU_UTILIZATION}</div>
            <ServicesAnalytics
              servicesData={servicesData}
              dataURL={SERVICE_CPU_METRICS}
            />
          </div>
          <div>
            <div className={styles.heading}>{SYSTEM_CPU_UTILIZATION}</div>
            <SystemAnalytics
              systemData={systemData}
              utilityHeading={CPU_USED}
              dataURL={SERVICE_CPU_METRICS}
            />
          </div>
        </>
      )}
    </div>
  );
};
