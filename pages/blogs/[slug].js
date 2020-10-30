// next js providers dynamic routes - [id]
// To match a dynamic segment you can use the bracket syntax. This allows you to match named parameters.
// pages/blog/[slug].js → same as /blog/:slug (/blog/hello-world)

// If you want to access the router object inside any function component in your app, 
// you can use the useRouter hook
import { useRouter } from 'next/router';



import PageLayout from 'components/PageLayout';

const BlogDetail = (blogs) => {
  // query prop to access value of named param of dynamic routes
  // here, the value is slug of our blog
  const { query } = useRouter();
  // debugger

  return (
    <PageLayout>
      <p>Sorry, no blogs yet. Check it out in the future! </p>
    </PageLayout>
  );
};


export default BlogDetail;
