import { Row, Col } from 'react-bootstrap';

import { getAllBlogs } from 'library/api';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItemList from 'components/CardItemList';
import CardItem from 'components/CardItem';

export default function Home({ blogs }) {
  // debugger
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />

      {/** A JavaScript value, usually an object or array, to be converted into JSON */}
      {/* JSON.stringify(blogs) */}

      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardItemList />
        </Col> */}

        {blogs.map(blog => (
          <Col md='4' key={blog.slug}>
            <CardItem
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
              author={blog.author}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// Static page is created at Build Time
// Build Time is for Production server when creating build dir - npm run build
// npm start - to run production build or to server production app with no more compiling

// this func is called during the build (build time) in the server,
// not part of client javaScript
// & it will create static index html page & send it to browser
// After building, it provides Props to our page.
export const getStaticProps = async () => {
  // When we make request, we are always receiving the SAME html page in the Production env
  // same random number on every request in Static Page
  // const number = Math.random();

  // now we need to define a func to get data from sanity
  const blogs = await getAllBlogs();

  // Make sure the returned object from getStaticProps is a plain Object
  // and not using Date, Map or Set.
  return {
    props: {
      // define props that we want to pass onto our page
      // key/value
      // message: 'Hello World!'
      blogs,
      // number
    },
  };
};

// Dynamic page - getServerSideProps (Server-side Rendering): Fetch data on each request
// export const getServerSideProps = async () => {
//   // our page is created at Request Time
//   const number = Math.random();

//   // now we need to define a func to get data from sanity
//   const blogs = await getAllBlogs();

//   // Make sure the returned object from getStaticProps is a plain Object
//   // and not using Date, Map or Set.
//   return {
//     props: {
//       // define props that we want to pass onto our page
//       // key/value
//       // message: 'Hello World!'
//       blogs,
//       number
//     },
//   };
// };

// Static page is created at build time
// Faster, can be cached using CDN
// When we make request, we are always receiving the SAME html page

// Dynamic page is created at page request time (like fetching data on server)
// Little bit slower, time depends on data we are fetching

// getStaticProps which is same as older getInitialProps
// is an async function that can be added to any page as a static method
// Static methods are used to implement functions that belong to the particular class,
// but not to any particular object of it.

// getStaticProps is used to asynchronously fetch some data, which then populates props.
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

// For the initial page load, getStaticProps will run on the server only.
// getStaticProps will then run on the client when navigating to
// a different route via the next/link component or by using next/router.

// getStaticProps enables server-side rendering in a page and
// allows you to do initial data population, pre-rendering, it means sending
// the page with the data already populated from the server.
// This is especially useful for SEO.

// Deployment. By default, next export will generate an out directory,
// which can be served by any static hosting service or CDN.
// We strongly recommend using Vercel even if your Next. js app is fully static.

// You should use getStaticProps if:
// The data required to render the page is available at build time ahead of a user’s request.
// The data comes from a headless CMS - backend.
// The data can be publicly cached (not user-specific).
// The page must be pre-rendered (for SEO) and
// be very fast — getStaticProps generates HTML and JSON files,
// both of which can be cached by a CDN for performance.

// We’ll talk about the three unique Next.js functions you can use to fetch data for pre-rendering:
// 1. getStaticProps (Static Generation): Fetch data at build time. (Production Env)
// 2. getStaticPaths (Static Generation): Specify dynamic routes to pre-render based on data.
// 3. getServerSideProps (Server-side Rendering): Fetch data on each page request. (Production Env)
