import React from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const MovieCard = (props) => {
  return (
    <Card style={{ width: '12rem', margin: '10px' }}>
      <Card.Img
        style={{
          backgroundImage: `url(${props.Poster})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }
        } variant="top" height='270px' />
      <Card.Body>
        <div style={{
          padding: '0px',
          height: '100px'
        }}>
          <h6 style={{
            margin: '0px',
            textAlign: 'center'
          }}>{props.Title}</h6>
        </div>
        <Row>
          <Link to={`/details/${props.imdbID}`}>
            <Button className="btn-sm mx-auto" variant="secondary"><p>More Info</p></Button>
          </Link>
          <Button className="btn-sm mx-auto mb-0" variant="secondary"><p>Nominate</p></Button>
        </Row>
      </Card.Body>
    </Card >
  );
};

export default MovieCard;
