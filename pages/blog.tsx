import PrimaryLayout from '@components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const BlogPage: NextPageWithLayout = () => {
  return <div>Blog Page</div>;
};

BlogPage.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default BlogPage;
