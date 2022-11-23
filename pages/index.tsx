import PrimaryLayout from '@components/layouts/primary/PrimaryLayout';
import DefaultTable from '@components/tables/default/DefaultTable';
import { mockDefaultTableProps } from '@components/tables/default/DefaultTable.mocks';
import { NextPageWithLayout } from './page';

import styles from 'styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <DefaultTable
        tData={mockDefaultTableProps.base.tData}
        tColumns={mockDefaultTableProps.base.tColumns}
      />
    </section>
  );
};

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Home;
