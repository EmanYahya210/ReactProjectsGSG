import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ContactMe from '../ContactMe/ContactMe.js'
import Home from '../Home/Home'
import Counter from '../CountLetter/Counter'
import BookSearch from '../BookSearch/BookSearch.js'
import './style.css'

export default function NavBarComp() {
  return (
    <BrowserRouter>
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav">
          <Container>
            <Navbar.Brand href="#">React Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={'/'}>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="React Projects"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to={'/bookLib'}>
                    Books
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to={'/counter'}>
                    Count Letter
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <Nav.Link as={Link} to={'/contactme'}>
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/bookLib" element={<BookSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
