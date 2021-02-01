import React from 'react';
import {Link} from 'react-router-dom';

class Nav360 extends React.Component {
  render() {
    return (
      <nav className="mainNav360">
        <ul>
          <li>
            <Link className="links360" id="toHome" to="/">
              <span className="material-icons">&#xe88a;</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav360;
