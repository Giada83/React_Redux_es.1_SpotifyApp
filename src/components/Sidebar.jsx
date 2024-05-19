import { Col, Container, Navbar, Nav, Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { BsBookFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchMusic } from "../redux/action";

const Sidebar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchMusic(query));
  };

  return (
    <>
      <Col md={2}>
        <Navbar expand="md" className="fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Navbar.Brand>
              <Link tohref="/">
                <img src="/img/logo.png" alt="Spotify Logo" width="131" height="40" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <ul>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/">
                      <IoHomeSharp size={23} />
                      &nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/library">
                      <BsBookFill size={23} />
                      &nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    {/* FORM */}
                    <Form className="input-group mt-3" onSubmit={handleSubmit}>
                      <InputGroup className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Search"
                          value={query}
                          onChange={handleChange}
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" type="submit" size="sm" className="h-100">
                          Go
                        </Button>
                      </InputGroup>
                    </Form>
                    {/* END FORM */}
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <div className="nav-btn">
            <button className="signup-btn" type="button">
              Sign Up
            </button>
            <button className="login-btn" type="button">
              Login
            </button>
            <p>
              <Link tohref="/">Cookie Policy</Link> | <Link tohref="/">Privacy</Link>
            </p>
          </div>
        </Navbar>
      </Col>
    </>
  );
};

export default Sidebar;
