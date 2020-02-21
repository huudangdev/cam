import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'
import MusicPlayer from './MusicPlayer'
const root = '/cam'

function TopBar ({ location }) {
  return (
    <>
      <Navbar bg='primary' expand='lg' variant='dark'>
        <Navbar.Brand href={root + '/'}>Beta - 1.0.1</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href={root + '/'}>
            Upload files
            </Nav.Link>
            <Nav.Link href={root + '/editor'}>
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
