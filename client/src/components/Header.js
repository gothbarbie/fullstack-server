import React, { Component } from 'react'


class Header extends Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="left brand-logo">Emaily</a>
            <ul id="nav-mobile" className="right">
              <li>
                <a href="">Login With Google</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
