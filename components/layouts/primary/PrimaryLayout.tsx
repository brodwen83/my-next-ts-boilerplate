import Head from 'next/head';
import MainHeader from '../headers/main/MainHeader';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children?: React.ReactNode;
}

const PrimaryLayout = ({ children }: IPrimaryLayout) => (
  <>
    <Head>
      <title>Primary Layout</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Wendell's Cool Next.js with Typescript Boilerplate"
        key="desc"
      />
    </Head>
    <MainHeader logoText="LOGO HERE" />
    <main className={styles.main}>{children}</main>
  </>
);

export default PrimaryLayout;
