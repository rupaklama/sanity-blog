import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

import BlogNavbar from './BlogNavbar';
const PageLayout = ({ children, className }) => {
  return (
    <Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Container>
        <BlogNavbar />

        <div className={`page-wrapper ${className}`}>{children}</div>

        <footer className='page-footer'>
          <div>
            <a href='#'>Courses</a>
            {' | '}
            <a href='https://github.com/rupaklama'>Github</a>
          </div>
        </footer>
      </Container>
    </Fragment>
  );
};

export default PageLayout;
