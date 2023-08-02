import React from "react";

import { useAppSelector } from "../../store/hooks";
import Selectors from "../../store/selectors";

import styles from './ContentCreateFormTarget.module.scss';

interface IInputs {
  [input: string]: string;
}

const ContentCreateForm = () => {
  const currentTargetNode = useAppSelector(Selectors.template.currentTargetNode);

  const [inputs, setInputs] = React.useState<IInputs>({});

  React.useEffect(() => console.log(inputs), [inputs]); // TODO: не работает:))))))))))))))))))))))))))0

  React.useEffect(() => {
    if (currentTargetNode) {
      setInputs({});
      const values = Object.values(currentTargetNode);
      values.forEach(item => {
        const stringsArr = item.children.split("_");
        inputs[stringsArr[1]] = "";
      });
      console.log(inputs);
    }
  }, [currentTargetNode]);

  return (
    <div className={styles.contentCreateForm}>
      {currentTargetNode &&
        Object.values(currentTargetNode)?.map((item: any) => {
          const stringsArr = item.children.split("_");

          const callback = (e: any) => setInputs(prev => {
            const keyName = stringsArr[1];
            prev[keyName] = e.target.value;
            return prev;
          })

          return (
            <div key={`${stringsArr[1]}${stringsArr[2]}`} className={styles.formItem} >
              <div className={styles.formItemTitle}>{stringsArr[1]}</div>
              <input value={inputs[stringsArr[1]]} onChange={callback} className={styles.formItemInput} type="text" />
            </div>
          );
        })}
      <button className={styles.formButton}>Create</button>
    </div>
  );
};

export default ContentCreateForm;
