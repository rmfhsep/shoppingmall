import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import { data } from "./data";

function App() {
  const [datas, setDatas] = useState(data);
  console.log(datas);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>

            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main datas={datas} />} />
        <Route path="/detail/:id" element={<Detail datas={datas} />} />

        {/* <Route path="about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
        </Route> */}

        <Route path="*" element={<div>없는 페이지에요.</div>} />
      </Routes>
    </div>
  );
}

export default App;
