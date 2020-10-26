import { Row, Col, Media, Image } from "react-bootstrap";

const AuthorIntro = () => {
  return (
    <Row>
      <Col md='8'>
        <Media className='mb-4 admin-intro'>
          <Image
            roundedCircle
            width={64}
            height={64}
            className='mr-3'
            src='https://avatars0.githubusercontent.com/u/62438399?s=400&u=e2cf4776a11b33da04e6481fce0569befc7b4c40&v=4'
            alt='Generic placeholder'
          />
          <Media.Body>
            <p className='welcome-text'>
              Hello, my name is Rupak Lama and I am an experienced professional
              React Front End Developer. Please, feel free to reach me if you
              have any projects!
            </p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
  );
};

export default AuthorIntro;
