import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'
import MusicPlayer from './MusicPlayer'

function TopBar ({ location }) {
  return (
    <>
      <Navbar bg='primary' expand='lg' variant='dark'>
        <Navbar.Brand href='/'>Beta - 1.0.1</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' active={location.pathname === '/'}>
            Upload files
            </Nav.Link>
            <Nav.Link href='/editor' active={location.pathname === '/editor'}>
            Editor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MusicPlayer theme='light' top={500} left={50} auto={false} />
    </>
  )
}
export default withRouter(TopBar)
