import React from 'react';
import {Link} from 'react-router-dom';
import NavDesktop from './navDesktop';
import NavMovile from './navMovile';
class Nav extends React.Component {
  render() {
    if (window.screen.width > 800) {
      return <NavDesktop />;
    }else{
      return <NavMovile />;
    }
  }
}
export default Nav;
