import styles from "./SideNavbar.module.css";
import cx from "classnames";

import assets from "../../../assets";

import { SideNavbarItem } from "../../elements";
import { ANALYTICS_COMPONENTS } from "../../../constants";

import { useState } from "react";

interface ISideBarProps {
  selectedComponent: string;
  onElementClick: (element: string) => void;
}

export const SideNavbar = (props: ISideBarProps) => {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const { selectedComponent, onElementClick } = props;

  const isSelected = (component: string): boolean =>
    selectedComponent === component;

  return (
    <div className={cx(styles.container, isCollapse && styles.collapseContainer)}>
      <div className={styles.iconContainer}>
        {isCollapse ? (
          <img
            className={styles.icon}
            src={assets.RightArrowIcon}
            alt="Expand"
            onClick={() => setIsCollapse(false)}
          />
        ) : (
          <img
            className={cx(styles.icon, styles.collapseIcon)}
            src={assets.LeftArrowIcon}
            alt="Collapse"
            onClick={() => setIsCollapse(true)}
          />
        )}
      </div>
      {!isCollapse && (
        <>
          {ANALYTICS_COMPONENTS.map((component: string, index: number) => (
            <SideNavbarItem
              key={index}
              itemName={component}
              isSelected={isSelected(component)}
              onElementClick={onElementClick}
            />
          ))}
        </>
      )}
    </div>
  );
};
