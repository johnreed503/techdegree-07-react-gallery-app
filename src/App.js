import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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


const App = () => {
    return (
      <div>
        <Jumbotron>
          <Container>
            <SearchForm />
            <Nav />
          </Container>
        </Jumbotron>
        <Results />
        <NotFound />
      </div>
    );
}
// class App extends Component {
//     return (
//       <div>
//         <Jumbotron>
//           <Container>
//             <SearchForm />
//             <Nav />
//           </Container>
//         </Jumbotron>
//         <Results />
//       </div>
//     );
// }

//stateless
const Photo = () => {
  return (
    <li>
      <img scr="" alt></img>
    </li>
  )
};

//stateful
class SearchForm extends React.Component {
  render() {
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
    );
  }
}

//stateful (photoContainer)
class Results extends React.Component {
  render() {
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
  }
};

//stateless
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

//stateless
const NotFound = () => {
  return (
    <div>
      <h3>Not Found</h3>
      <p>Please try again</p>
    </div>
  )
}


export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
