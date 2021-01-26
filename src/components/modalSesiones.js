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
            <li className="play-stop fas">&#xf04b;</li>
            <li className="play-stop fas">&#xf04c;</li>
          </ul>
        </nav>
        <div className="barrausuario"> </div>
      </div>
    );
  }
}
export default ModalSesiones;
