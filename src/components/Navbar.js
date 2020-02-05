import React from 'react'

const Navbar = () => {
  return (
    <>
      <Navbar bg='light'>
        <Navbar.Brand href='#home'>Brand link</Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg='light'>
        <Navbar.Brand>Brand text</Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg='dark'>
        <Navbar.Brand href='#home'>
          <img
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
      </Navbar>
      <br />
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
      React Bootstrap
        </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Navbar
