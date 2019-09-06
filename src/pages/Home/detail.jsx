/* eslint-disable jsx-a11y/href-no-hash */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class list extends Component {
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

            Home detail

          !
          <Link to={'/home'}>
                  <Button color="warning" className="btn-blogsadd" >Home</Button>
                </Link>
                <Link to={'/login'}>
                  <Button color="warning" className="btn-blogsadd" >Login</Button>
                </Link>
        </h2>
      </div>
    )
  }
}

export default list
