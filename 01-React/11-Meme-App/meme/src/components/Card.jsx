import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (props) => {
    const navigate = useNavigate();
  return (
    <div>
        <Card style={{ width: '18rem', margin: '25px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button onClick={e => navigate(`/edit?url=${props.img}`)} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MemeCard;
