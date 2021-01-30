import React from 'react';

class ModalSesiones extends React.Component {
  render() {
    return (
      <div id="modalSesiones" className="modalSesiones hide">
        <div className="closeModal" id="closeModal">
          X
        </div>
        <div className="imagenLight">
          <img id="mainImg" src="" />
        </div>
        <div id="prevModal" className="next-prev prev">
          &#60;
        </div>
        <div id="nextModal" className="next-prev next">
          >
        </div>
        <nav className="navLight">
          <p id="infoModal">sesion 13</p>
          <ul>
            <i id="play" className="play-stop material-icons">
              &#xe037;
            </i>
            <i id="stop" className="play-stop material-icons hide">
              &#xe034;
            </i>
          </ul>
        </nav>
        <div id="userBar"className="barrausuario"> </div>
      </div>
    );
  }
}
export default ModalSesiones;
