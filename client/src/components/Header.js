import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    console.log(this.props.auth)
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        )
      default:
        return [
          <li key="payments"><Payments /></li>,
          <li key="credits">Credits: {this.props.auth.credits || 'N/A'}</li>,
          <li key="logout"><a href="/api/logout">Logout</a></li>
        ]
    }
  }

  render () {
    return (
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/' } className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right">
            {this.renderContent()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)
