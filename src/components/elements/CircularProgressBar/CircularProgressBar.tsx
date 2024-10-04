import styles from "./CircularProgressBar.module.css";
import cx from "classnames";

import assets from "../../../assets";

import { CPB_CENTER, CPB_RADIUS, EM_DASH } from "../../../constants";
import { getAngleFromPercentage, getColorCodeFromPercentage } from "../../../utils";

interface ICircularProgressBarProps {
  heading: string;
  percentage: number;
  clickFunction: (name: string) => void;
  warning?: boolean;
  className?: string;
  ariaLabel?: string;
}

const computePath = (percentage: number): string => {
  const arcCenter: string = `0 ${percentage <= 50 ? 0 : 1},1`;

  const angle = getAngleFromPercentage(percentage);

  return `M50,${CPB_CENTER - CPB_RADIUS}
					A${CPB_RADIUS},${CPB_RADIUS} ${arcCenter} ${
    CPB_CENTER + CPB_RADIUS * Math.sin(angle)
  },${CPB_CENTER - CPB_RADIUS * Math.cos(angle)}`;
};

export const CircularProgressBar = (props: ICircularProgressBarProps): JSX.Element => {
  const { heading, percentage, clickFunction, warning, ariaLabel, className } = props;

  const onClickHandler = (): void => {
    clickFunction(heading);
  };

  return (
    <div className={cx(styles.container, className)} aria-label={ariaLabel}>
      <span className={styles.heading}>{heading}</span>
      <svg width={150} height={150} viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth="0.2"
          className={styles.outerCircle}
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          strokeWidth="0.2"
          className={styles.innerCircle}
        />
        <path
          className={styles.fillProgress}
          stroke={getColorCodeFromPercentage(percentage)}
          strokeWidth={5}
          d={computePath(percentage)}
        />
        {!warning && (
          <text
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
            className={styles.text}
            onClick={onClickHandler}
          >
            {`${percentage?.toFixed(2)}%`}
          </text>
        )}
        {warning && (
          <foreignObject width="100%" height="100%" onClick={onClickHandler}>
            <div className={styles.warningContainer}>
              <img src={assets.WarningYellowIcon} alt="Warning" />
              <span className={styles.emDash}>{EM_DASH}</span>
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
};
