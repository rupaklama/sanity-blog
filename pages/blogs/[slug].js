// next js providers dynamic routes - [id]
// To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.
// pages/blog/[slug].js → /blog/:slug (/blog/hello-world)

import { useRouter } from 'next/router';
import PageLayout from 'components/PageLayout';

const BlogDetail = () => {
  const { query } = useRouter();

  return (
    <PageLayout>
      <p>Sorry, no blogs yet. Check it out in the future! </p>
    </PageLayout>
  );
};

export default BlogDetail;
