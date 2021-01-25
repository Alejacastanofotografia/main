import React from 'react';

class ModalSesiones extends React.Component {
  render() {
    return (
      <div id="modalSesiones" className="modalSesiones hide">
        <p className="cerrarLight" id="closeModal">
          X
        </p>
        <div className="imagenLight">
          <img
            id="mainImg"
            src=""
          />
        </div>
        <div
          className="back"
	>
          &#60;
        </div>
        <div
          className="go"
          >
          >
        </div>
        <input
          className="carpetastitulo"
          type="button"
          value="Imagenes/Galerias/Infantil"
          id="carpetaInfantil"
        />
        <nav className="navLight">
          <ul>
            <li className="activeFotos">
              <i
                className="fas cambiarsola"
                onclick="playfotos('intantilTotal', 'imgInfantil')">
                &#xf04b;
              </i>
            </li>
            <li className="activeFotos2">
              <i className="fas cambiarsola2" onclick="Stopfotos()">
                &#xf04c;
              </i>
            </li>
          </ul>
        </nav>
        <div className="barrausuario"> </div>
      </div>
    );
  }
}
export default ModalSesiones;
