import React from 'react'
import './Styles/App.scss'

import Nav from 'Components/Header/Nav'
import NavItems from 'Components/Header/NavItems'
import Authentication from 'Components/Firebase/Authentication'
import Footer from 'Components/Footer/Footer'

function App () {
  return (
    <>
      <Nav>
        <NavItems>
          <a className="nav-link active" aria-current="page"href="#splash">Link A</a>
        </NavItems>
        <Authentication />
      </Nav>

      <div className="flex-grow-1 py-3"></div>

      <Footer>
        <a className="text-muted" href="#">
          <i className="bi bi-lg bi-twitter"></i>
        </a>
      </Footer>
    </>
  )
}

export default App
