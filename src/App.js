import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { data } from "./data";

function App() {
  const [datas, setDatas] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <div>
        <Row>
          {datas.map((shoe, idx) => {
            return (
              <Col xs={6} md={4}>
                <img
                  src={`https://codingapple1.github.io/shop/shoes${
                    idx + 1
                  }.jpg`}
                  width="80%"
                />
                <h4>{shoe.title}</h4>
                <p>{shoe.price}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default App;
