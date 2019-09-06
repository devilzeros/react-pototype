/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {}
  onClick() {
    window.location.replace('/')
  }
  render() {
    return (
      <div>
        <h1>Create React App By ChunWarayut</h1>
        <h2>
        oginLoginLoginLogin
          <a
            href="https://github.com/ChunWarayut"
            target="_blank"
            rel="noreferrer noopener"
          >
            LoginLoginLoginLogin
          </a>
          !
        </h2>
      </div>
    )
  }
}

export default Login
