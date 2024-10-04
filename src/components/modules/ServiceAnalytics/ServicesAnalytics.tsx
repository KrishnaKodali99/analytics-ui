import styles from "./ServicesAnalytics.module.css";
import cx from "classnames";

import { CircularProgressBar } from "../../elements";
import { AnalyticsModal } from "../AnalyticsModal";

import { useState } from "react";

export interface IServiceData {
  name: string;
  usage: number;
  status?: boolean;
}

interface IServiceAnalyticsProps {
  servicesData: IServiceData[];
  dataURL?: string;
  className?: string;
}

export const ServicesAnalytics = (props: IServiceAnalyticsProps): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [serviceName, setServiceName] = useState<string>("");

  const { servicesData, dataURL, className } = props;

  const openModal = (name: string): void => {
    setModalStatus(true);
    setServiceName(name);
  };
  const closeModal = (): void => setModalStatus(false);

  return (
    <div className={cx(styles.container, className)}>
      {servicesData?.map((serviceData: IServiceData, index: number) => (
        <CircularProgressBar
          key={index}
          className={styles.flexWrap}
          heading={serviceData?.name}
          percentage={serviceData?.usage}
          warning={!serviceData?.status}
          clickFunction={openModal}
        />
      ))}
      {modalStatus && (
        <AnalyticsModal
          serviceName={serviceName}
          dataURL={dataURL}
          handleClose={closeModal}
        />
      )}
    </div>
  );
};
