import styles from "./ImageSortIcon.module.css";

import assets from "../../../assets";

interface IImageSortIconProps {
  isSort: boolean;
}

export const ImageSortIcon = (props: IImageSortIconProps ): JSX.Element => {
  const { isSort } = props;

  return (
    <img src={(isSort)? assets.UpArrrowIcon: assets.DownArrowPointedIcon} alt="sort-icon" className={styles.icon}/>
  );
};
