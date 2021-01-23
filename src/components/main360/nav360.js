import React from 'react';
import {Link} from 'react-router-dom';

class Nav360 extends React.Component {
  render() {
    return (
      <nav className="mainNav360">
        <ul>
          <li>
            <Link className="links360" id="" to="">
              <i className="fas">&#xf406;</i>
            </Link>
          </li>
          <li>
            <Link className="links360" id="toHome" to="/">
	      <img src="/images/icon/logo.svg" />
            </Link>
          </li>
          <li>
            <Link className="links360" id="" to="">
              <i className="fas">&#xf093;</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav360;
