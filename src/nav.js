import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Emp from './addemp';
import Nav from 'react-bootstrap/Nav';
function BrandExample() {
  return (
    <>
      <Router >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
             Employee details
              <Link id="a1" to="/emp">Details</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/emp" element={<Emp />} />
        </Routes>
      </Router>
    </>
  );
}

export default BrandExample;