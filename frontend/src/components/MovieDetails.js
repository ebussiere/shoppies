import React from 'react';
import { Button, Card,CardDeck, ListGroup, ListGroupItem, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";


const MovieDetails = (props) => {
  
  const movieList = useSelector(state => state.movieList)
  const { term } = movieList;

  return (
    <Container>
      <Row noGutters>
      <CardDeck>
        <Card style={{ width: '50rem' }}>
          <Card.Img
            style={{
              backgroundImage: `url(${props.poster})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }
            } variant="top" height='270px' />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              {props.plot}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Runtime: {props.runtime}</ListGroupItem>
            <ListGroupItem>Release Date: {props.released}</ListGroupItem>
            <ListGroupItem>Genre: {props.genre}</ListGroupItem>
            <ListGroupItem>Directed by: {props.director}</ListGroupItem>
            <ListGroupItem>Written by: {props.writer}</ListGroupItem>
            <ListGroupItem>Cast: {props.actors}</ListGroupItem>
            <ListGroupItem>Awards: {props.awards}</ListGroupItem>
            <ListGroupItem>Previous: {term}</ListGroupItem>
          </ListGroup>
            <Link to={`/${term}`}>
             <Button className="btn-sm mx-auto" variant="secondary"><p>Back</p></Button>
          </Link>
          </Card>
          </CardDeck>
      </Row>
    </Container>
  );
};

export default MovieDetails;
