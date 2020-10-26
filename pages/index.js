import { Row, Col } from 'react-bootstrap';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItemList from 'components/CardItemList';
import CardItem from 'components/CardItem';
export default function Home() {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />

      <Row className='mb-5'>
        <Col md='10'>
          <CardItemList />
        </Col>

        <Col md='4'>
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
}
