import styles from "./AsmsAnalytics.module.css";

import { Analytics, AnalyticsHeader, SideNavbar } from "../../components/modules";
import { useState } from "react";
import { CPU_USAGE } from "../../constants";

export const AsmsAnalytics = () => {
  const [activeComponent, setActiveComponent] = useState<string>(CPU_USAGE);

  const handleElementClick = (element: string): void => {
    setActiveComponent(element);
  };

  return (
    <div className={styles.container}>
      <AnalyticsHeader />
      <div className={styles.body}>
        <SideNavbar selectedComponent={activeComponent} onElementClick={handleElementClick}/>
        <Analytics activeComponent={activeComponent}/>
      </div>
    </div>
  );
};
