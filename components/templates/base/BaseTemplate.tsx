import styles from './BaseTemplate.module.css';

export interface IBaseTemplate {
  sampleTextProp: string;
  children?: React.ReactNode;
}

const BaseTemplate = ({ sampleTextProp, children }: IBaseTemplate) => (
  <div className={styles.container}>
    {sampleTextProp}
    {children}
  </div>
);

export default BaseTemplate;
