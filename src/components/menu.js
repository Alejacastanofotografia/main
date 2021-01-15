import React from 'react'

class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <div className="wrapper">
          <div className="wrapperImg">
            <img src="/images/menu/img4.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Retratos</p>
            </div>
          </div>
          <div className="wrapperImg">
            <img src="/images/menu/img2.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Paisajes</p>
            </div>
          </div>
          <div className="wrapperImg">
            <img src="/images/menu/img1.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Primera < br/>Comunión </p>
            </div>
          </div>
          <div className="wrapperImg">
            <img src="/images/menu/img20.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Quinces</p>
            </div>
          </div>
          <div className="wrapperImg">
            <img src="/images/menu/img10.jpg" alt="Retraro" title="retrato" />
            <div className="wrapperText">
              <p>Bodas</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
