import React from 'react';
import {Link} from 'react-router-dom';
import NavDesktop from './navDesktop';
import NavMovile from './navMovile';
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: this.props.active,
    };
  }
  render() {
    if (window.screen.width > 800) {
      return <NavDesktop activeLink={this.state.menuActive} />;
    } else {
      return <NavMovile />;
    }
  }
}
export default Nav;
