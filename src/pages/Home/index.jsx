/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
class Home extends Component {
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
          Subscribe with
          <a
            href="https://github.com/ChunWarayut"
            target="_blank"
            rel="noreferrer noopener"
          >
            Home Page
          </a>
          !
          <Link to={'/home/detail'}>
                  <Button color="warning" className="btn-blogsadd" >Home Detail</Button>
                </Link>
                <Link to={'/login'}>
                  <Button color="warning" className="btn-blogsadd" >Login</Button>
                </Link>
        </h2>
      </div>
    )
  }
}

export default Home
