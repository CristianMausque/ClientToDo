import { AuthContext } from '../../context/auth.context'
import { useContext } from 'react'

import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Navigation() {

  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user,'>>>>>>>>>>>>>>>>')

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  // if (!user) {
  //   navigate('/login')
  // }

  return (
    <Navbar sticky='top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          Powered by Cristian Mausque
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a
              href="https://www.linkedin.com/in/cristian-mausque"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/CristianMausque"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Github
            </a>
            <NavDropdown title="User" id="basic-nav-dropdown">

              <NavDropdown.Item href={`/profile/user/${user?.id}`}>Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
              <NavDropdown.Item href="/register">Signup</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Todos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation