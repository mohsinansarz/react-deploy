import React  from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import ShadowGenerator from './ShadowGenerator';
import BorderRadius from './BorderRadius';
import GradientGenerator from './GradientGenerator';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import './style.css';
const PageNotfound = () => (
  <Container fluid className="about p-0 heights capsule bg-black">
    <div className="container heights">
      <Row className="align-items-center justify-content-center heights m-0">
        <Col lg="12" className="text-center p-0">
          <h1 className="m-0">404!</h1>
          <p>
            Sorry, We couldn't find this page.
            But don't worry, you can find <br />
            plenty of other things on our <Link className="notFound" to="/">Homepage</Link> .
          </p>
        </Col>
      </Row>
    </div>
  </Container>
)
function App() {

  return (
    <>
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ShadowGenerator}></Route>
          <Route path="/border-radius" component={BorderRadius}></Route>
          <Route path="/gradient-generator" component={GradientGenerator}></Route>
          <Route component={PageNotfound}></Route>
        </Switch>
      </Router>
      </div>
    </>
  );
}

export default App;
