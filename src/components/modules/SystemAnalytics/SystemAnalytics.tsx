import styles from "./SystemAnalytics.module.css";
import cx from "classnames";

import { AnalyticsModal } from "../index";
import { CircularProgressBar } from "../../elements";

import { useState } from "react";

interface ISystemAnalytics {
  systemData: any;
  utilityHeading: string;
  dataURL?: string;
  className?: string;
}

export const SystemAnalytics = (props: ISystemAnalytics): JSX.Element => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [serviceName, setServiceName] = useState<string>("");

  const { systemData, utilityHeading, dataURL, className } = props;

  const openModal = (name: string): void => {
    setModalStatus(true);
    setServiceName(name);
  };
  const closeModal = (): void => setModalStatus(false);

  return (
    <div className={cx(styles.container, className)}>
      <CircularProgressBar
        heading={utilityHeading}
        percentage={systemData?.usage}
        warning={false}
        clickFunction={openModal}
      />
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
