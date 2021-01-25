import React from 'react';
import {withRouter, Link, BrowserRouter as Router} from 'react-router-dom';
import {selectSesion} from './scripts/sesiones.js';

class Sesiones extends React.Component {
  constructor(props) {
    super(props);
    this.selectSesion = this.sesion.bind(this);
  }
sesion(e, total, classNameD, folder, paisajes) {
    selectSesion(e, total, classNameD, folder, paisajes);
  }

  render() {
    return (
      <div>
        <nav id="menuGalerias">
          <div className="MenuGaleriasAfter">
            <ul>
              <h3 className="galeriasH">Sesiones</h3>
              <li onClick={e => this.selectSesion(e, 18, 'galeriaV', 'Adulto')}>
                Retrato Adulto
              </li>
              <li
                onClick={e => this.selectSesion(e, 12, 'galeriaV', 'Infantil')}>
                Retrato Infantil
              </li>
              <li onClick={e => this.selectSesion(e, 12, 'galeriaV', 'Boda')}>
                Boda
              </li>
              <li
                onClick={e => this.selectSesion(e, 10, 'galeria', 'Pcomunion')}>
                Primera Comunión
              </li>
              <li
                onClick={e =>
                  this.selectSesion(e, 10, 'galeriaV', 'Prequinces')
                }>
                Prequinces
              </li>
              <li onClick={e => this.selectSesion(e, 10, 'galeria', 'Quinces')}>
                Quinces
              </li>
              <li
                onClick={e =>
                  this.selectSesion(e, 20, 'galeria', 'Paisajes', 'paisajes')
                }>
                Paisajes
              </li>
            </ul>
          </div>
        </nav>

        <section className="galerias ">
          <div className="contenido">
            <p className="frase">
              <span className="classNamespan" id="write1"></span>
              <span className="maquinaEscribir">|</span>
              Aquí va la frase
            </p>
          </div>
          <ul id="mainSesiones">
	</ul>
          <ul id="mainSesionesAnimales" className="galeria"></ul>
          <ul id="mainSesionesFlores" className="galeriaV"></ul>
        </section>
      </div>
    );
  }
}

export default withRouter(Sesiones);
