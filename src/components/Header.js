import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { searchData } from '../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import './Header.css'


function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div style={{ width: '100vw' }}>

      <Navbar expand="lg" className='header_section'>
        <Container fluid>
          <Navbar.Brand onClick={() => navigate('/')} className='nav_title'>
            <i className="fa-solid fa-shop fa-beat me-3 text-white ms-2  nav_icon"></i>
            FlipKart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

            </Nav>
            <Form className="d-flex">
              <input onChange={(e) => dispatch(searchData(e.target.value))} type="search" className='w-100 border-0 me-3' placeholder="search here.." />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}

export default Header