import React from 'react';
import Wrapper360 from './360';
import Nav360 from './nav360';

class Main360 extends React.Component {
  render() {
    return (
      <div className="wrapper360">
	<div className="nav360">
          <Nav360 />
	</div>
        <div className="main360">
          <Wrapper360 />
        </div>
      </div>
    );
  }
}
export default Main360;
