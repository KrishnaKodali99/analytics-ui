import styles from "./AnalyticsModal.module.css";

import assets from "../../../assets";

import { BarGraph, LoadingIcon } from "../../elements";

import axios from "axios";
import { useEffect, useState } from "react";
import { ANALYTICS_X_AXIS_NAME, ANALYTICS_Y_AXIS_NAME } from "../../../constants";

interface IAnalyticsModalProps {
  serviceName?: string;
  dataURL?: string;
  handleClose: () => void;
}

export const AnalyticsModal = (props: IAnalyticsModalProps) => {
  const { serviceName, dataURL, handleClose } = props;

  const [loading, setLoading] = useState<boolean>(true);
  const [serviceData, setServiceData] = useState<any[]>();

  useEffect(() => {
    axios
      .get(`${dataURL}/${serviceName?.replace(" ", "%20")}`)
      .then((response: any) => {
        if (response?.status === 200) {
          setServiceData(response?.data);
          console.log("Data: ", response?.data);
        }
        setLoading(false);
      })
      .catch((error: any) => {
        console.error(error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getServiceBarData = (): any =>
    serviceData?.map((data: any) => ({
      x_c: data?.timestamp,
      y_c: data?.usage,
    })) || {};

  return (
    <div className={styles.container}>
      <div className={styles.modalContainer}>
        {loading ? (
          <LoadingIcon />
        ) : (
          <>
            <div className={styles.closeContainer}>
              <img
                className={styles.closeIcon}
                src={assets.CloseIcon}
                onClick={handleClose}
                alt="Close Icon"
              />
            </div>
            {serviceName}
            <BarGraph
              dataPoints={getServiceBarData()}
              xAxisName={ANALYTICS_X_AXIS_NAME}
              yAxisName={ANALYTICS_Y_AXIS_NAME}
              minValue={0}
              maxValue={100}
              showLabels={true}
            />
          </>
        )}
      </div>
    </div>
  );
};
