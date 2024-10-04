import styles from "./TextBox.module.css";
import cx from "classnames";

interface ITextBoxProps {
  heading: string;
  text: string;
  className?: string;
  textSize?: "regular" | "large";
}

export const TextBox = (props: ITextBoxProps): JSX.Element => {
  const { heading, text, className, textSize = "regular" } = props;

  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.heading}>{heading}</div>
      <hr className={styles.lineBreak} />
      <div className={cx(styles.text, styles[textSize])}>{text}</div>
    </div>
  );
};
