import React from 'react';
//import { start360 } from '/scripts/vr/main360.js';

class Section360 extends React.Component {
  render() {
    return (
      <div className="home360">
        <div id="viewer"></div>
        <div className="wrapperError" id="ifStop360">
          <p >
            <i className="fas">&#xf04b;</i> <br />
            Toca aquí para iniciar la reproducción
          </p>
        </div>
      </div>
    );
  }
}
export default Section360;
