import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
      <div className="ui grey three item inverted menu">
        <Link className="item" to="/">
          Home
        </Link>
        <Link className=" item" to="/about">
          About
        </Link>
        <Link className=" item" to="/contact">
          Contact
        </Link>
      </div>
    );
}

export default Navigation
