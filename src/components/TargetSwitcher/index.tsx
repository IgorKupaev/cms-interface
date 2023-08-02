import React from "react";

import { setCurrentTarget, setCurrentTargetNode } from "../../store/features/template/slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Selectors from "../../store/selectors";

import { findTargetStrings } from "../../utils";

import styles from "./TargetSwitcher.module.scss";

const TargetSwitcher = () => {
  const dispatch = useAppDispatch();

  const currentTarget = useAppSelector(Selectors.template.currentTarget);
  const targetNames = useAppSelector(Selectors.template.targetNames);
  const targetLinks = useAppSelector(Selectors.template.targetLinks);

  const changeTargetHandler = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setCurrentTarget(currentTarget.id));
  };
  React.useEffect(() => {
    const keys = Object.keys(targetLinks);
    if (keys.length) {
      // @ts-ignore
      let targetPoints = findTargetStrings(targetLinks[currentTarget].target.format);
      dispatch(setCurrentTargetNode(targetPoints));
    }
  }, [currentTarget, targetLinks, dispatch]);

  return (
    <>
      <div className={styles.infoBlock}>
        <span className={styles.infoBlockTitle}>CURRENT TARGET:</span>
        <span className={styles.infoBlockValue}>{currentTarget}</span>
      </div>
      <div className={styles.targets}>
        {targetNames.map((target: string) => (
          <button onClick={changeTargetHandler} id={target} className={styles.target}>
            {target}
          </button>
        ))}
      </div>
    </>
  );
};

export default TargetSwitcher;
