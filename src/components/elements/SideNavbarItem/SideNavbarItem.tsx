import styles from "./SideNavbarItem.module.css";
import cx from "classnames";

interface ISideNavbarItemProps {
  itemName: string;
  isSelected: boolean
	onElementClick: (element: string) => void;
}

export const SideNavbarItem = (props: ISideNavbarItemProps) => {
  const { itemName, isSelected, onElementClick } = props;

  const onClickHandler = (): void => {
    onElementClick(itemName);
  };

  return (
    <div className={cx(styles.container, isSelected && styles.selected)} onClick={onClickHandler}>
      <div className={styles.itemName}>{itemName}</div>
    </div>
  );
};
