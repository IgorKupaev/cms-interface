import React from "react";

import { findObjectsWithTarget, json } from "../../utils";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setTargetLinks, setTargetNames, setTemplate } from "../../store/features/template/slice";
import Selectors from "../../store/selectors";

import styles from "./MainPage.module.scss";
import TargetSwitcher from "../../components/TargetSwitcher";
import ContentCreateForm from "../../components/ContentCreateForm";

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const pages = useAppSelector(Selectors.template.pages);

  React.useEffect(() => {
    dispatch(setTemplate(JSON.parse(json)));
  }, [dispatch]);

  React.useEffect(() => {
    const result = findObjectsWithTarget(pages.map((item: any) => item.node));

    const targetsDir: any = {};
    result.forEach((item: any) => {
      targetsDir[item.target.value] = item;
    });

    const keys = Object.keys(targetsDir);

    dispatch(setTargetNames(keys));
    dispatch(setTargetLinks(targetsDir));
  }, [pages, dispatch]);

  return (
    <div className={styles.mainContainer}>
      <TargetSwitcher />
      <ContentCreateForm />
    </div>
  );
};

export default MainPage;
