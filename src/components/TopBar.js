import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MusicPlayer from './MusicPlayer'
import { Button, ButtonToolbar } from 'react-bootstrap'
const root = '/cam'

function TopBar ({ handleOnClickHome, handleOnClickEditor }) {
  return (
    <>
      <Navbar bg='primary' expand='lg' variant='dark'>
        <Navbar.Brand href={root + '/'}>Beta - 1.0.1</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <ButtonToolbar>
              <Button onClick={handleOnClickHome} variant='light'>
                U P L O A D
              </Button>
              <Button onClick={handleOnClickEditor} variant='info'>
                E D I T O R
              </Button>
            </ButtonToolbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MusicPlayer theme='light' top={500} left={50} auto={false} />
    </>
  )
}
export default (TopBar)
