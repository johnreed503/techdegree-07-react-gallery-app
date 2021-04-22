import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  FormControl,
  Button
 } from 'react-bootstrap';
//import SearchForm from './components/SearchForm';
//import Results from './components/Results';


class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <SearchForm />
            <Nav />
          </Container>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

// const Photo = () => {
//   return (
//     <img scr="" alt>
//   )
// };

const SearchForm = () => {
  return (
  <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="enter something..." />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>
)
}

const Results = () => {
  return (
    <Container>
  <h2>Results List</h2>
  <ListGroup>
    <ListGroupItem href="#" active>Link 1</ListGroupItem>
    <ListGroupItem href="#">Link 2</ListGroupItem>
    <ListGroupItem href="#" disabled>Link 3</ListGroupItem>
  </ListGroup>
</Container>
)
};

const Nav = () => {
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <a href="#">Cats</a>
        </li>
        <li>
          <a href="#">Dogs</a>
        </li>
        <li>
          <a href="#">Computers</a>
        </li>
      </ul>
    </nav>
  )
}

const NotFound = () => {

}


export default App;
