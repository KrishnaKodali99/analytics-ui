interface IGraphMarkersProps {
  className?: string;
}

export const GraphMarkers = (props: IGraphMarkersProps): JSX.Element => (
  <>
    <line
      x1="0"
      y1="40"
      x2="1000"
      y2="40"
      strokeDasharray={6}
      strokeWidth={0.4}
      className={props?.className}
    />
    <line
      x1="0"
      y1="80"
      x2="1000"
      y2="80"
      strokeDasharray={6}
      strokeWidth={0.4}
      className={props?.className}
    />
    <line
      x1="0"
      y1="120"
      x2="1000"
      y2="120"
      strokeDasharray={6}
      strokeWidth={0.4}
      className={props?.className}
    />
    <line
      x1="0"
      y1="160"
      x2="1000"
      y2="160"
      strokeDasharray={6}
      strokeWidth={0.4}
      className={props?.className}
    />
  </>
);
