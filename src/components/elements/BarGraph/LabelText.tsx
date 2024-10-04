interface ILabelTextProps {
  className?: string;
}

export const LabelText = ({ className }: ILabelTextProps): JSX.Element => (
  <>
    <text
      x="-1%"
      y="168"
      textAnchor="middle"
      className={className}
    >
      {20}
    </text>
    <text
      x="-1%"
      y="126"
      textAnchor="middle"
      className={className}
    >
      {40}
    </text>
    <text
      x="-1%"
      y="84"
      textAnchor="middle"
      className={className}
    >
      {60}
    </text>
    <text
      x="-1%"
      y="42"
      textAnchor="middle"
      className={className}
    >
      {80}
    </text>
  </>
);
