import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div style={{ margin: '2rem' }}>
        <header>
          <h1>Client</h1>
        </header>
        <main>
          <p>
            Welcome!
          </p>
          <a href="/auth/google">Sign in with Google</a>
        </main>
      </div>
    )
  }
}

export default App
