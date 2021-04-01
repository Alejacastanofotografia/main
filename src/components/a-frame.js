import React from 'react';

class VR360 extends React.Component {
  render() {
    return (
      <div className="vr">
        <div className="vr-wrapper">
          <a-scene>
		    <a-assets>
		      <img id="img1"src="https://edcas804.github.io/360/img2.jpg" crossOrigin="anonymous" />
		    </a-assets>
            <a-sky  
		        src="#img1" 
		        rotation="0 0 0"
                animation="property: rotation; to: 0 360 0; loop: true; easing:linear; dur: 180000"
		    >
		    </a-sky>
          </a-scene>
        </div>
      </div>
    );
  }
}
export default VR360;
