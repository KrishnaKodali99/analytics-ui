import { X_AXIS_MAX, Y_AXIS_MAX } from "../../../constants";
import { getDateFromEpochWithHM } from "../../../utils";
import styles from "./BarGraph.module.css";
import { GraphMarkers } from "./GraphMarkers";
import { LabelText } from "./LabelText";

interface IBarGraphData {
  x_c: string;
  y_c: string;
}

interface IBarGraphProps {
  dataPoints?: IBarGraphData[];
  xAxisName?: string;
  yAxisName?: string;
  minValue?: number;
  maxValue?: number;
  showLabels?: boolean;
}

export const BarGraph = (props: IBarGraphProps): JSX.Element => {
  const {
    dataPoints = [],
    xAxisName,
    yAxisName,
    minValue = 0,
    maxValue = Y_AXIS_MAX,
    showLabels = false,
  } = props;

  const cDistance: number = X_AXIS_MAX / (dataPoints.length + 1);

  const normalizeY = (dataPointY: string): number => {
    const normalizedValue: number =
      (+dataPointY - minValue) / (maxValue - minValue);
    return normalizedValue * Y_AXIS_MAX;
  };

  return (
    <div className={styles.container}>
      <svg width={1200} height={230} viewBox="-100 0 1200 220">
        <line x1="0" y1="0" x2="0" y2="210" className={styles.axis} />
        <line x1="0" y1="210" x2="1000" y2="210" className={styles.axis} />

        <GraphMarkers className={styles.markers} />

        {dataPoints?.map((dataPoint: IBarGraphData, index: number) => (
          <>
          <line
            key={index}
            x1={cDistance * (index + 1)}
            y1={Y_AXIS_MAX}
            x2={cDistance * (index + 1)}
            y2={Y_AXIS_MAX - +normalizeY(dataPoint?.y_c || "0")}
            stroke="blue"
            strokeWidth={1}
            className={styles.lineData}
          />
          <title className={styles.toolTip}>{getDateFromEpochWithHM(dataPoint?.x_c)}</title>
          </>
        ))}
        <text
          x="500"
          y="100%"
          dy=".2em"
          textAnchor="middle"
          className={styles.text}
        >
          {xAxisName}
        </text>
        <text
          x="-3%"
          y="100"
          textAnchor="middle"
          transform="rotate(-90, -40, 90)"
          className={styles.text}
        >
          {yAxisName}
        </text>
        {showLabels && <LabelText className={styles.text} />}
      </svg>
    </div>
  );
};
