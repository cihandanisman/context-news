import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardNews({item}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.urlToImage} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}

        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Made By : {item.author}</ListGroup.Item>

      </ListGroup>
      <Card.Body>
        <Card.Link href={item.url}>Go to New</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardNews;