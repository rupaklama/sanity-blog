import Link from 'next/link';
import { Card } from "react-bootstrap";

const CardItem = ({ title, subtitle, date, image, author, slug }) => {
  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>

          {/** ?. returns undefined, use other value in chain here */}
          <img
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          />
          <div>
            <Card.Title className='font-weight-bold mb-1'>
              {author?.name}
            </Card.Title>
            <Card.Text className='card-date'>{date}</Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img
            src={image}
            alt='Card image cap'
          />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>

      <Link href={`/blogs/${slug}`}>
        <a className='card-button'>Read More</a>
      </Link>
      
    </Card>
  );
};

export default CardItem;
